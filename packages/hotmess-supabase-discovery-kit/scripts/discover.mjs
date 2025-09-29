import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { createClient } from '@supabase/supabase-js'
import pg from 'pg'

const outDir = path.join(process.cwd(), 'output')
await fs.mkdir(outDir, { recursive: true })
await fs.mkdir(path.join(outDir, 'json'), { recursive: true })

const env = (k) => process.env[k] && process.env[k].trim() || ''
const SUPABASE_URL = env('SUPABASE_URL')
const SERVICE = env('SUPABASE_SERVICE_KEY')
const ANON = env('SUPABASE_ANON_KEY')
const DATABASE_URL = env('DATABASE_URL')

const supa = (SUPABASE_URL && SERVICE) ? createClient(SUPABASE_URL, SERVICE) : null

async function writeJSON(name, data){
  const fp = path.join(outDir, 'json', name)
  await fs.writeFile(fp, JSON.stringify(data, null, 2))
}

async function discoverAuth(){
  if(!supa) return { error: 'no_supabase_admin' }
  try{
    const resp = await fetch(`${SUPABASE_URL}/auth/v1/settings`, { headers: { apikey: SERVICE, Authorization: `Bearer ${SERVICE}` } })
    const providers = await resp.json()
    await writeJSON('auth_providers.json', providers)
    return { providers }
  }catch(e){ return { error: String(e) } }
}

async function discoverStorage(){
  if(!supa) return { error: 'no_supabase_admin' }
  try{
    const resp = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, { headers: { apikey: SERVICE, Authorization: `Bearer ${SERVICE}` } })
    const buckets = await resp.json()
    await writeJSON('storage_buckets.json', buckets)
    return { buckets }
  }catch(e){ return { error: String(e) } }
}

async function discoverDB(){
  if(!DATABASE_URL) return { error: 'no_database_url' }
  const client = new pg.Client({ connectionString: DATABASE_URL })
  await client.connect()
  const run = async (name, sql) => {
    const res = await client.query(sql)
    await writeJSON(name + '.json', res.rows)
    return res.rows
  }
  const result = {}
  result.columns = await run('columns', `select table_schema, table_name, column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema not in ('pg_catalog','information_schema')
order by table_schema, table_name, ordinal_position;`)
  result.rls = await run('rls', `select schemaname, tablename, rowsecurity
from pg_tables
where schemaname not in ('pg_catalog','information_schema')
order by schemaname, tablename;`)
  result.policies = await run('policies', `select pol.polname as policy_name, nsp.nspname as schema_name, cls.relname as table_name,
       pg_get_expr(pol.polqual, pol.polrelid) as using_clause,
       pg_get_expr(pol.polwithcheck, pol.polrelid) as with_check,
       pol.polcmd as cmd
from pg_policy pol
join pg_class cls on cls.oid = pol.polrelid
join pg_namespace nsp on nsp.oid = cls.relnamespace
order by schema_name, table_name, policy_name;`)
  result.functions = await run('functions', `select n.nspname as schema, p.proname as function, pg_get_functiondef(p.oid) as definition
from pg_proc p join pg_namespace n on p.pronamespace = n.oid
where n.nspname not in ('pg_catalog','information_schema');`)
  result.triggers = await run('triggers', `select event_object_schema as schema, event_object_table as table, trigger_name, action_timing, event_manipulation
from information_schema.triggers order by event_object_schema, event_object_table;`)
  result.extensions = await run('extensions', `select * from pg_extension;`)
  try{ result.buckets = await run('storage_buckets', `select * from storage.buckets;`) }catch{}
  await client.end()
  return result
}

function mdTable(rows, columns){
  if(!rows?.length) return '_none_'
  const head = `| ${columns.join(' | ')} |\n| ${columns.map(()=> '---').join(' | ')} |`
  const body = rows.slice(0, 50).map(r => `| ${columns.map(c=>String(r[c]??'')).join(' | ')} |`).join('\n')
  const note = rows.length>50 ? `\n… (${rows.length-50} more)` : ''
  return head + '\n' + body + note
}

const auth = await discoverAuth()
const storage = await discoverStorage()
const db = await discoverDB()

const report = `# Supabase Discovery Report

Generated: ${new Date().toISOString()}

## Auth Providers
${auth.providers ? '```json\n'+JSON.stringify(auth.providers,null,2)+'\n```' : '_no access or error_'}

## Storage Buckets
${storage.buckets ? mdTable(storage.buckets, ['id','name','public']) : '_no access or error_'}

## Tables & Columns
${db.columns ? mdTable(db.columns, ['table_schema','table_name','column_name','data_type','is_nullable']) : '_no database url provided_'}

## RLS Tables
${db.rls ? mdTable(db.rls, ['schemaname','tablename','rowsecurity']) : ''}

## Policies
${db.policies ? mdTable(db.policies, ['schema_name','table_name','policy_name','cmd']) : ''}

## Functions
${db.functions ? (db.functions.length ? '_(see output/json/functions.json for full definitions)_' : '_none_') : ''}

## Triggers
${db.triggers ? mdTable(db.triggers, ['schema','table','trigger_name','action_timing','event_manipulation']) : ''}

## Extensions
${db.extensions ? mdTable(db.extensions, ['extname','extversion']) : ''}
`
await fs.writeFile(path.join(outDir, 'report.md'), report)
console.log('✅ Wrote', path.join(outDir, 'report.md'))
