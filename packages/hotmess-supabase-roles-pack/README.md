# HOTMESS — Supabase Roles & Grants Hardening
Date: 2025-09-28

Locks down `public` schema privileges, sets **least-privilege** defaults, and assigns explicit grants for Supabase roles.

## Roles in scope
- **anon**: unauthenticated visitors (JWT: `anon`)
- **authenticated**: signed-in users (JWT: `authenticated`)
- **service_role**: server-only secret; full power (NEVER in client)
- **authenticator**: internal (used by Supabase)
- **supabase_admin** and other `supabase_*` internal roles: leave as is
- **postgres**: owner

## Order
```bash
cp .env.example .env  # set DATABASE_URL
make apply-all
make verify
```

## What it does
1. **Schema lockdown**: removes broad PUBLIC privileges on `public` schema.
2. **Default privileges**: future tables/functions inherit least-privilege (no silent grants to PUBLIC).
3. **Explicit table grants**: only `authenticated` gets SELECT on a few public tables; `service_role` gets ALL.
4. **Function security**: templates to switch functions to `SECURITY INVOKER` and revoke EXECUTE from `anon` unless needed.
5. **Read-only**: optional `supabase_read_only_user` usage template.
