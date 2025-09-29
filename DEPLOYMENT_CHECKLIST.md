# Deployment Checklist — HOTMESS
Date: 2025-09-28

## Vercel (apps/web, apps/admin)
- [ ] Create two projects; set regions to LHR/FRA/CDG.
- [ ] Add env vars from `.env.example` files.
- [ ] Add `NPM_TOKEN` to repo secrets for release workflow.

## Supabase
- [ ] Create EU/UK project; run `supabase/migrations` then `supabase/seed/seed.sql`.
- [ ] Set anon + service keys in Vercel env.

## Radio (AzuraCast)
- [ ] Create station(s); import `ops/radio/playlists.json` and map audio categories.
- [ ] Apply `rotations.json`; confirm TOH IDs + sweepers schedule.

## Automation (Make)
- [ ] Import `ops/radio/make_scenario.json` and set real webhook URLs.

## Compliance
- [ ] Confirm PRS + PPL licence numbers (if streaming recorded music).
- [ ] Finalize subprocessor list in `docs/gdpr/subprocessors.md`.
- [ ] Run DPIA and keep a signed copy in `docs/gdpr/`.
