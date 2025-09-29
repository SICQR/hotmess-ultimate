# HOTMESS — Supabase Discovery Kit

Use this to **inspect what’s already built** in your Supabase project and export a Markdown report.

## ⚠️ Security first
- **Rotate** any keys you shared in chat (Anon, Service, and Legacy JWT secret). Do it in Supabase → Project Settings → API / Auth.
- Never commit the **service role** key. Keep it server-side only.

## What this kit does
- Connects to Postgres via `DATABASE_URL` to list **tables, columns, RLS policies, functions, triggers, extensions**.
- Uses Supabase Admin with **SERVICE** key to list **auth providers** and **storage buckets**.
- Writes a single `report.md` you can paste into Notion/GitHub.

## Setup
```bash
cp .env.template .env
# Fill: SUPABASE_URL, SUPABASE_SERVICE_KEY, SUPABASE_ANON_KEY, DATABASE_URL
pnpm install
pnpm run discover
```

The script will output:
- `output/report.md`
- `output/json/*.json` (raw data dumps)

## If you don’t have DATABASE_URL
- You can still run with SERVICE key; the report will include Auth + Storage. The DB section will be skipped.
