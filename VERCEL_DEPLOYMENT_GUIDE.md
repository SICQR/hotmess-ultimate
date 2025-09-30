# Vercel Deployment Agent Prompt for HOTMESS Ultimate

This document provides comprehensive instructions for deploying the HOTMESS Ultimate platform to Vercel. Follow these steps to set up both the web application and admin dashboard.

## 🎯 Project Overview

HOTMESS is a Next.js 15-based radio platform with two main applications:
- **apps/web** - Main public-facing website with radio streaming, shows, membership, and shop
- **apps/admin** - Administrative dashboard for managing content and operations

## 📋 Prerequisites

Before deploying to Vercel, ensure you have:
- [ ] A Vercel account with appropriate permissions
- [ ] Access to Supabase project (for database and auth)
- [ ] API keys for third-party integrations (optional but recommended)
- [ ] Node.js 20+ and npm 8+ installed locally for testing

## 🚀 Deployment Steps

### 1. Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `SICQR/hotmess-ultimate` repository
3. **Important**: You'll need to create **TWO separate projects**:
   - Project 1: `hotmess-web` (for apps/web)
   - Project 2: `hotmess-admin` (for apps/admin)

### 2. Configure Build Settings for apps/web

#### Root Directory Settings
```
Root Directory: apps/web
```

#### Build & Development Settings
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

#### Node Version
```
Node.js Version: 20.x
```

### 3. Configure Environment Variables for apps/web

Add these environment variables in Vercel Project Settings → Environment Variables:

#### Required Variables
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Application Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
```

#### Optional but Recommended Variables
```bash
# Shopify Integration
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret

# RadioKing Streaming
NEXT_PUBLIC_RADIO_STREAM=https://listen.radioking.com/radio/YOUR_ID/stream/YOUR_STREAM_ID
NEXT_PUBLIC_RADIOKING_API_KEY=your_api_key

# Telegram Bot (for notifications)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHANNEL_URL=https://t.me/your_channel

# QR Code
NEXT_PUBLIC_QR_BASE_URL=https://your-domain.vercel.app/qr

# Feature Flags
NEXT_PUBLIC_ENABLE_CMP=false
NEXT_PUBLIC_ENABLE_AGEGATE=true
```

### 4. Configure Build Settings for apps/admin

#### Root Directory Settings
```
Root Directory: apps/admin
```

#### Build & Development Settings
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev -p 3001
```

### 5. Configure Environment Variables for apps/admin

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key

# Admin Access Control
ADMIN_ALLOWED_EMAILS=admin@example.com,admin2@example.com

# Optional Integrations
STRIPE_SECRET_KEY=sk_live_your_stripe_key
TELEGRAM_BOT_TOKEN=your_bot_token
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
MAKE_WEBHOOK_AFTERCARE=https://hook.integromat.com/your_webhook
AZURACAST_BASE_URL=https://radio.example.com
AZURACAST_API_KEY=your_azuracast_key
```

### 6. Vercel Regional Configuration

For optimal performance (especially for EU/UK users):

1. Go to Project Settings → Functions
2. Set Function Region to: **Europe (London)** `lhr1` or **Europe (Frankfurt)** `fra1`
3. Or use multiple regions: `lhr1`, `fra1`, `cdg1` (Paris)

Alternatively, use the `vercel.json` file that's already in the repository:
```json
{
  "version": 2,
  "regions": ["arn1", "cdg1", "lhr1", "fra1"],
  "headers": [...]
}
```

## 🔒 Security Best Practices

### Environment Variables
- **Never commit** `.env`, `.env.local`, or `.env.production` to Git
- Use Vercel's encrypted environment variable storage
- Rotate secrets regularly, especially service role keys
- Use different keys for production vs preview deployments

### Supabase Security
```bash
# Browser-safe (NEXT_PUBLIC_*)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Server-only (NO NEXT_PUBLIC_ prefix!)
SUPABASE_SERVICE_ROLE_KEY=...  # DO NOT expose to browser
```

### API Routes Protection
- All API routes in `app/api/` run server-side only
- Service role keys are never exposed to the client
- Use Supabase RLS (Row Level Security) for database access control

## ⚙️ Build Optimizations

### Image Optimization
The project uses Next.js Image Optimization with these domains:
```javascript
// next.config.js
images: {
  domains: ['1e0297-a4.myshopify.com', 'cdn.shopify.com'],
}
```

### Caching Strategy
- Static pages are cached at the edge
- API routes use appropriate cache headers
- Press kit and assets have long-term caching (1 hour+)

## 🐛 Troubleshooting Common Issues

### Build Error: "supabaseUrl is required"
**Solution**: Ensure environment variables are set for the correct environment:
- Go to Vercel Project → Settings → Environment Variables
- Add variables to "Production", "Preview", and "Development" as needed
- Redeploy the project

### Build Error: Module not found '@/lib/...'
**Solution**: Check that the root directory is set correctly:
- For `apps/web`: Root Directory = `apps/web`
- For `apps/admin`: Root Directory = `apps/admin`

### TypeScript Errors During Build
**Solution**: The repository uses Next.js 15 with async params:
```typescript
// Correct usage for dynamic routes
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
```

### "use client" Directive Missing
**Solution**: Components using React hooks must have `"use client"` at the top:
```typescript
"use client";

import { useState } from "react";
// component code...
```

### Database Connection Issues
**Solution**: Verify Supabase configuration:
1. Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
2. Ensure Supabase project is active and accessible
3. Verify Row Level Security (RLS) policies in Supabase dashboard

## 📝 Post-Deployment Checklist

After deploying to Vercel:

### Web Application (apps/web)
- [ ] Visit the deployed URL and verify homepage loads
- [ ] Test radio streaming functionality
- [ ] Check that navigation works across all pages
- [ ] Verify age gate (if enabled) functions properly
- [ ] Test affiliate link generation (`/affiliate`)
- [ ] Confirm press kit download works (`/press-kit`)
- [ ] Check show pages load correctly (`/shows/[slug]`)

### Admin Dashboard (apps/admin)
- [ ] Login with admin credentials
- [ ] Verify dashboard loads
- [ ] Test any administrative functions
- [ ] Check that API integrations work (Stripe, Telegram, etc.)

### Database & Auth
- [ ] Test user registration/login via Supabase Auth
- [ ] Verify database queries work correctly
- [ ] Check that RLS policies are enforced
- [ ] Test any Supabase real-time subscriptions

### Third-Party Integrations
- [ ] Shopify storefront links work
- [ ] Radio stream plays correctly
- [ ] Telegram notifications send (if configured)
- [ ] QR code generation works (`/api/qr`)

## 🔄 CI/CD with Vercel

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

### Automatic Deployments
```
main branch → Production (hotmess-web.vercel.app)
feature/* → Preview (feature-branch-*.vercel.app)
PR #123 → Preview (hotmess-ultimate-pr-123.vercel.app)
```

### Manual Deployments
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics
1. Enable Vercel Analytics in Project Settings
2. Add Speed Insights for Core Web Vitals tracking
3. Monitor build times and deployment logs

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Speed Insights for performance monitoring

## 🔗 Useful Links

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [HOTMESS Repository](https://github.com/SICQR/hotmess-ultimate)

## 💡 Best Practices

1. **Environment Variables**: Always use Vercel's environment variable UI rather than committing `.env` files
2. **Preview Deployments**: Test changes in preview deployments before merging to production
3. **Build Caching**: Leverage Next.js build cache for faster deployments
4. **Edge Functions**: Consider using Edge Functions for API routes that need low latency
5. **Database Connection Pooling**: Use Supabase's connection pooling for better performance
6. **Image Optimization**: Always use Next.js `<Image>` component for automatic optimization
7. **Error Boundaries**: Implement error boundaries for better error handling
8. **Loading States**: Use Suspense and loading.tsx for better UX

## 🆘 Getting Help

If you encounter issues:
1. Check Vercel deployment logs for error messages
2. Review the build output for specific error details
3. Consult the troubleshooting section above
4. Check the repository's existing documentation
5. Review Supabase logs for database/auth issues

## 📄 Environment Variable Reference

Copy this template and fill in your values:

```bash
# ===========================
# HOTMESS Web App (.env)
# ===========================

# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# App Configuration (Required)
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production

# Shopify (Optional)
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
SHOPIFY_WEBHOOK_SECRET=...

# Radio (Optional)
NEXT_PUBLIC_RADIO_STREAM=https://listen.radioking.com/radio/ID/stream/ID
NEXT_PUBLIC_RADIOKING_API_KEY=...

# Telegram (Optional)
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHANNEL_URL=...

# Feature Flags (Optional)
NEXT_PUBLIC_ENABLE_CMP=false
NEXT_PUBLIC_ENABLE_AGEGATE=true

# QR Code (Optional)
NEXT_PUBLIC_QR_BASE_URL=https://your-domain.com/qr
```

---

**Last Updated**: 2025-09-30  
**Version**: 1.0  
**Maintained By**: HOTMESS Platform Team
