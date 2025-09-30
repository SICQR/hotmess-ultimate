# Quick Start Guide for AI Agents - Vercel Deployment

## TL;DR - Deploy in 5 Steps

```bash
# 1. Install dependencies
npm install

# 2. Build both apps
cd apps/web && npm run build && cd ../..
cd apps/admin && npm run build && cd ../..

# 3. Install Vercel CLI
npm install -g vercel

# 4. Deploy apps/web
cd apps/web
vercel --prod
# Add environment variables when prompted

# 5. Deploy apps/admin  
cd apps/admin
vercel --prod
# Add environment variables when prompted
```

## Essential Environment Variables

### apps/web (Minimum Required)
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_APP_URL=your_domain
```

### apps/admin (Minimum Required)
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE=your_service_key
ADMIN_ALLOWED_EMAILS=email@example.com
```

## Build Issues? Try These:

```bash
# Clean and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build

# Skip env validation (build only)
SKIP_ENV_VALIDATION=true npm run build

# Check for errors
npm run typecheck
npm run lint
```

## Vercel Dashboard Deployment

1. Go to vercel.com/new
2. Import `SICQR/hotmess-ultimate`
3. Set Root Directory: `apps/web` (then create another for `apps/admin`)
4. Add environment variables
5. Deploy

## Post-Deploy Verification

```bash
# Test endpoints
curl https://your-deployment.vercel.app
curl https://your-deployment.vercel.app/api/now-playing

# View logs
vercel logs your-deployment-url --follow
```

## Common Fixes

| Issue | Solution |
|-------|----------|
| Build fails | Clear `.next`, reinstall dependencies |
| Missing env vars | Add to Vercel project settings and redeploy |
| TypeScript errors | Run `npm run typecheck` and fix issues |
| 500 errors | Check Vercel function logs for details |
| CORS issues | Update `vercel.json` headers config |

## Need More Help?

See `AGENT_PROMPT_VERCEL_DEPLOY.md` for comprehensive guide.

---

**Quick Test Build:**
```bash
cd apps/web && npm run build && npm run start &
# Open http://localhost:3000
```
