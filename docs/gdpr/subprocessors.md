# Subprocessors & Vendors (example)
- **Vercel** (hosting/CDN) — DPA in place, EU processing where possible.
- **Supabase** (DB/Auth/Storage) — DPA in place; choose EU region.
- **Telegram** (messaging) — data transfers outside EU; limit PII; obtain consent.
- **Make (Integromat)** (automation) — DPA; configure EU data centres where possible.
- **Stripe** (payments) — DPA and PCI DSS compliant.
