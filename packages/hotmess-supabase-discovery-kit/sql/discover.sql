-- See README for context

-- Tables & columns
select table_schema, table_name, column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema not in ('pg_catalog','information_schema')
order by table_schema, table_name, ordinal_position;

-- RLS enabled tables
select schemaname, tablename, rowsecurity
from pg_tables
where schemaname not in ('pg_catalog','information_schema')
order by schemaname, tablename;

-- Policies
select pol.polname as policy_name, nsp.nspname as schema_name, cls.relname as table_name,
       pg_get_expr(pol.polqual, pol.polrelid) as using_clause,
       pg_get_expr(pol.polwithcheck, pol.polrelid) as with_check,
       pol.polcmd as cmd
from pg_policy pol
join pg_class cls on cls.oid = pol.polrelid
join pg_namespace nsp on nsp.oid = cls.relnamespace
order by schema_name, table_name, policy_name;

-- Functions
select n.nspname as schema, p.proname as function, pg_get_functiondef(p.oid) as definition
from pg_proc p join pg_namespace n on p.pronamespace = n.oid
where n.nspname not in ('pg_catalog','information_schema');

-- Triggers
select event_object_schema as schema, event_object_table as table, trigger_name, action_timing, event_manipulation
from information_schema.triggers
order by event_object_schema, event_object_table;

-- Extensions
select * from pg_extension;

-- Storage buckets (if permitted)
select * from storage.buckets;
