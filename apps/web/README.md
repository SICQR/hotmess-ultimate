# HOTMESS — All‑in‑One (Production Starter)

Bold, luxury, modern — black/white with an orange flick. Men‑only 18+, consent‑first, care‑first.

## Stack
- Next.js 15 (app router)
- Supabase (auth, DB, storage)
- Shopify (storefront links)
- RadioKing (live stream)
- Telegram bot (out of scope here, routes ready to integrate)

## Key Routes
- `/` Home — hero + Listen Live
- `/hosts` — roster with **Open show** + **Read bio**
- `/shows/[slug]` — show header with **Read bio**, external links
- `/shows/[slug]/bio` — half‑page bios
- `/press` — press hub + **Download Press Kit**
- `/press-kit` — streams the ZIP with attachment headers
- `/shop` — light theme shop landing (links to Shopify)
- `/membership` — tiers: Free / PRO
- `/radio` — listen live
- `/records` — Raw Convict hub
- `/community`, `/about`
- **Legal hub:** `/legal` → Terms, Privacy, Care Disclaimer, Age Verification, DMCA, Moderation, Abuse & Safety, Accessibility, Data & Privacy, Sponsorship, Creator Onboarding, Partner Integrations
- **SEO:** `/sitemap.xml`, `robots.txt`

## Press Kit
- `public/press/press-kit.zip` bundles:
  - `bios.md`, `brand.md`
  - `logos/` SVGs
  - `images/` hero JPGs (3000×2000) + shop pack shots
- Replace placeholder JPGs in `public/img/press/*-hero-3000x2000.jpg`

## OG (OpenGraph)
- `/hosts` and `/press` have static OG images
- `/shows/[slug]` uses `grace-hero-3000x2000.jpg` dynamically

## Auth (Supabase)
- Magic link sign‑in: `/auth`
- Account page: `/account`
- Client: `lib/supabaseClient.ts`

## Affiliate + QR
- Page: `/affiliate` builds `?ref=` links + QR at `/api/qr?text=...`

## Now Playing
- Header shows current track via `/api/now-playing`
- Env: `RADIOKING_STATUS_URL` (JSON endpoint), `NEXT_PUBLIC_RADIO_STREAM`

## Environment
Create `.env.local` with:
```
NEXT_PUBLIC_SITE_URL=https://hotmessldn.com
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key   # (server only, if used)
NEXT_PUBLIC_SHOPIFY_DOMAIN=1e0297-a4.myshopify.com
RADIOKING_STATUS_URL=https://listen.radioking.com/radio/736103/track/now
NEXT_PUBLIC_RADIO_STREAM=https://listen.radioking.com/radio/736103/stream/802454
```
> Never expose `SUPABASE_SERVICE_KEY` in the browser.

## Scripts
```
npm i
npm run dev
npm run build && npm start
```

## Compliance & Safety
- **18+ age gate** (middleware) — blocks explicit routes until confirmed
- **Care disclaimer** — aftercare = information/services, not medical
- **GDPR** — export/delete via account (backend integration next)
- **Moderation** — policy pages shipped, reporting via bot/admin

## Folder Map (high‑level)
```
app/
  (site)/
    hosts/ press/ radio/ records/ membership/ shop/
    legal/ (hub + pages)
    shows/[slug]/  shows/*/bio/
  api/
    now-playing/  qr/  press/
components/NowPlaying.tsx
lib/supabaseClient.ts
public/
  img/press/… (heroes + shop shots)
  press/press-kit.zip (+ brand, bios, logos)
  data/media_map.json
```

## What’s next (fast wins)
1. **Supabase server actions** for PRO gating (replays), affiliate tracking writes.
2. **Shopify Storefront API** product cards on `/shop` with live inventory.
3. **Stripe Connect** payouts dashboard (admin‑only) and webhook handlers.

— Built 2025-09-28
