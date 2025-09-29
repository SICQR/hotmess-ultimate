# HOTMESS — Add-ons (AgeGate, CMP, Radio, Podcast, SEO, Health, Emails)

## How to enable on pages
- **Cookie banner:** import and place `<CookieBanner />` once in `app/layout.tsx` footer.
- **Age gate:** wrap explicit sections/pages with `<AgeGate>…</AgeGate>`.

### New envs
```
NEXT_PUBLIC_RADIOKING_STREAM=https://stream.radioking.com/your-mount
NEXT_PUBLIC_RADIOKING_META_URL=https://api.radioking.io/widget/radio/your-id/track/current
```
