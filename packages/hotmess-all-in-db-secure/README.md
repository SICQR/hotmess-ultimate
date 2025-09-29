# HOTMESS — All-In DB Secure
_Date: 2025-09-28_

One-shot database hardening for Supabase:
- Ensures core **extensions**
- Locks down **schema & defaults**
- Adds **indexes**
- Enables **RLS** with cast-aware policies
- Sets **service-role** management on HQ tables
- Installs **GDPR functions** (security-invoker)
- Provides **verify** queries
- Includes **Prisma schema** mapped to canonical tables

## Usage
```bash
cp .env.example .env   # set DATABASE_URL from Supabase → Settings → Database → Connection string (URI)
make db-secure         # run 00 → 06 → 99 (no drops)
make db-secure-plus    # includes optional extension DROP script (00b)
make verify            # list policies & quick checks
```

## Notes
- Scripts are **idempotent**; safe to re-run.
- Review `db/00b_extensions_optional_drop.sql` before using it.
- RLS assumes ownership columns are **uuid**; adjust if yours differ.
