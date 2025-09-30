# Agent Prompt: Build, Fix, and Deploy HOTMESS Ultimate on Vercel

## Overview
This document provides comprehensive instructions for an AI agent to build, fix issues, and deploy the HOTMESS Ultimate platform to Vercel. The platform consists of two Next.js applications that need to be deployed separately.

---

## Project Structure

```
hotmess-ultimate/
├── apps/
│   ├── web/          # Public-facing website (Next.js 15)
│   └── admin/        # Admin dashboard (Next.js 15)
├── packages/         # Shared packages and utilities
├── DEPLOYMENT_CHECKLIST.md  # Deployment requirements
├── ENV_VARS_MAP.md          # Environment variable mapping
└── package.json             # Root workspace configuration
```

---

## Prerequisites

Before starting the deployment process:

1. **Node.js**: Version 18+ required
2. **Vercel Account**: Access to Vercel dashboard with deployment permissions
3. **Supabase Project**: EU/UK region project with migrations applied
4. **API Keys**: Collect all required API keys and tokens (see Environment Variables section)

---

## Phase 1: Build and Fix Issues

### Step 1: Install Dependencies

```bash
# From repository root
npm install

# This will install dependencies for all workspaces (apps/web, apps/admin, and packages)
```

### Step 2: Build Apps Individually

#### Build apps/web:
```bash
cd apps/web
npm run build
```

**Common Issues and Fixes:**

1. **Missing Environment Variables**
   - Create `.env.local` from `.env.example`
   - Add placeholder values for build-time variables
   - Use `SKIP_ENV_VALIDATION=true` if needed for initial build

2. **TypeScript Errors**
   ```bash
   npm run typecheck
   # Fix any type errors in the code
   ```

3. **Missing Dependencies**
   ```bash
   npm install
   # Ensure all packages in package.json are installed
   ```

4. **Build Artifacts Issues**
   ```bash
   # Clean and rebuild
   rm -rf .next
   npm run build
   ```

#### Build apps/admin:
```bash
cd apps/admin
npm run build
```

Apply same troubleshooting steps as apps/web.

### Step 3: Lint and Quality Checks

```bash
# Run linting for each app
cd apps/web
npm run lint

cd ../admin
npm run lint
```

**Fix linting issues:**
- Follow ESLint recommendations
- Update code to match Next.js 15 best practices
- Ensure all imports are properly resolved

---

## Phase 2: Environment Configuration

### apps/web Environment Variables

Required variables (from `.env.example`):

```env
# Supabase - Required for auth and database
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Shopify - For e-commerce integration
NEXT_PUBLIC_SHOPIFY_DOMAIN=1e0297-a4.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token

# RadioKing - For live streaming
NEXT_PUBLIC_RADIO_STREAM=https://listen.radioking.com/radio/736103/stream/802454
NEXT_PUBLIC_RADIOKING_API_KEY=your-api-key

# Telegram - For bot integration
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHANNEL_URL=https://t.me/your-channel

# Application URLs
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_QR_BASE_URL=https://your-domain.com/qr

# Feature Flags
NEXT_PUBLIC_ENABLE_CMP=true
NEXT_PUBLIC_ENABLE_AGEGATE=true
NEXT_PUBLIC_TG_ANNOUNCE_CHANNEL=@your_channel

# Environment
NODE_ENV=production
```

### apps/admin Environment Variables

Required variables (from `.env.example`):

```env
# Supabase - Required
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE=your-service-role-key

# Admin Access Control
ADMIN_ALLOWED_EMAILS=founder@hotmess.lol,cto@hotmess.lol

# Payment Processing
STRIPE_SECRET_KEY=sk_live_your-stripe-key

# Communication Services
TELEGRAM_BOT_TOKEN=your-bot-token
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token

# Webhooks
MAKE_WEBHOOK_AFTERCARE=https://hook.integromat.com/your-webhook

# Radio Management
AZURACAST_BASE_URL=https://radio.example.com
AZURACAST_API_KEY=your-azuracast-key
```

---

## Phase 3: Vercel Deployment

### Option A: Deploy via Vercel CLI (Recommended for Agents)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
# Follow authentication prompts
```

#### 3. Deploy apps/web
```bash
cd apps/web

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
# Continue for all required variables...
```

#### 4. Deploy apps/admin
```bash
cd apps/admin

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add SUPABASE_SERVICE_ROLE production
# Continue for all required variables...
```

### Option B: Deploy via Vercel Dashboard

#### 1. Create New Project for apps/web
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import from GitHub repository: `SICQR/hotmess-ultimate`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. Set Environment Variables:
   - Add all variables from apps/web section above
   - Use the "Environment Variables" tab in project settings

6. Select regions:
   - Primary: `lhr1` (London)
   - Additional: `fra1` (Frankfurt), `cdg1` (Paris)

7. Deploy

#### 2. Create New Project for apps/admin
Repeat same steps as apps/web, but:
- **Root Directory**: `apps/admin`
- Use apps/admin environment variables
- Consider restricting access with Vercel's authentication features

### Option C: Deploy via GitHub Integration

#### 1. Connect Repository
1. In Vercel dashboard, import Git repository
2. Select `SICQR/hotmess-ultimate`

#### 2. Configure Build Settings

Create `vercel.json` in repository root (if not exists):

```json
{
  "version": 2,
  "projects": [
    {
      "name": "hotmess-web",
      "root": "apps/web",
      "framework": "nextjs"
    },
    {
      "name": "hotmess-admin", 
      "root": "apps/admin",
      "framework": "nextjs"
    }
  ]
}
```

#### 3. Set up Environment Variables
- Go to project settings in Vercel
- Add all environment variables for each project
- Use Vercel secrets for sensitive values

#### 4. Configure Deployment Triggers
- Main branch deploys to production
- Pull requests create preview deployments

---

## Phase 4: Post-Deployment Verification

### 1. Health Checks

Test each deployed application:

```bash
# apps/web
curl https://your-web-domain.vercel.app/
curl https://your-web-domain.vercel.app/api/now-playing

# apps/admin
curl https://your-admin-domain.vercel.app/
```

### 2. Functionality Tests

**For apps/web:**
- [ ] Homepage loads correctly
- [ ] Radio stream is accessible at `/radio`
- [ ] Now playing API returns data
- [ ] Shop page loads (age gate if enabled)
- [ ] Legal pages are accessible
- [ ] QR code generation works
- [ ] Press kit download works

**For apps/admin:**
- [ ] Admin login works
- [ ] Dashboard loads with proper authentication
- [ ] Supabase connection is working
- [ ] API integrations respond correctly

### 3. Monitor Logs

```bash
# View deployment logs
vercel logs your-deployment-url

# Stream live logs
vercel logs --follow
```

### 4. Performance Check
- Run Lighthouse audit on deployed sites
- Check Core Web Vitals in Vercel Analytics
- Verify edge function performance

---

## Phase 5: Troubleshooting Common Issues

### Build Failures

**Issue**: "Module not found" errors
```bash
# Solution: Install missing dependencies
npm install <missing-package>

# Or regenerate lock file
rm package-lock.json
npm install
```

**Issue**: TypeScript compilation errors
```bash
# Solution: Run typecheck to identify issues
npm run typecheck

# Fix type errors or temporarily skip validation
# Add to next.config.js:
typescript: {
  ignoreBuildErrors: false, // Set to true only temporarily
}
```

**Issue**: Environment variable not available
```bash
# Solution: Ensure variable is prefixed correctly
# Public variables: NEXT_PUBLIC_*
# Server-only: No prefix

# In Vercel: Re-add environment variables and redeploy
vercel env pull .env.local
```

### Runtime Errors

**Issue**: 500 Internal Server Error
- Check Vercel function logs
- Verify environment variables are set in production
- Check Supabase connection settings

**Issue**: CORS errors
- Update vercel.json with proper headers
- Check API route configurations

**Issue**: Middleware issues
- Verify middleware.ts is properly configured
- Check route matching patterns
- Ensure Supabase SSR is properly initialized

### Performance Issues

**Issue**: Slow initial load
- Enable Vercel Edge Caching
- Implement ISR for static pages
- Use image optimization

**Issue**: High function execution time
- Optimize API routes
- Implement proper caching strategies
- Use edge functions where appropriate

---

## Phase 6: Maintenance and Updates

### Continuous Deployment

Set up automatic deployments:

```bash
# Create .github/workflows/deploy.yml (if not exists)
```

Example GitHub Actions workflow:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build apps/web
        run: cd apps/web && npm run build
        
      - name: Build apps/admin
        run: cd apps/admin && npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Monitoring

1. **Vercel Analytics**: Enable for both projects
2. **Error Tracking**: Integrate Sentry (if configured)
3. **Uptime Monitoring**: Set up status checks
4. **Log Aggregation**: Review Vercel logs regularly

### Rollback Procedure

If deployment fails:

```bash
# Via CLI
vercel rollback

# Via Dashboard
# Go to Deployments → Select previous deployment → Promote to Production
```

---

## Quick Reference Commands

```bash
# Install everything
npm install

# Build both apps
cd apps/web && npm run build
cd apps/admin && npm run build

# Deploy with Vercel CLI
cd apps/web && vercel --prod
cd apps/admin && vercel --prod

# Check build locally
cd apps/web && npm run build && npm run start
cd apps/admin && npm run build && npm run start

# Update dependencies
npm update
npm audit fix

# Clean build artifacts
rm -rf apps/web/.next apps/admin/.next
rm -rf node_modules apps/*/node_modules
npm install
```

---

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js 15 Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Deployment Checklist**: See `DEPLOYMENT_CHECKLIST.md` in repository
- **Environment Variables**: See `ENV_VARS_MAP.md` in repository

---

## Success Criteria

Deployment is successful when:

- [x] Both apps build without errors
- [x] All environment variables are configured
- [x] Apps are accessible via Vercel URLs
- [x] Core functionality works (auth, API, radio, etc.)
- [x] No console errors in browser
- [x] Performance metrics are acceptable
- [x] Custom domains are configured (if applicable)
- [x] SSL certificates are active

---

## Agent Execution Checklist

Use this checklist to track progress:

- [ ] Repository cloned and dependencies installed
- [ ] apps/web builds successfully locally
- [ ] apps/admin builds successfully locally
- [ ] All linting errors resolved
- [ ] Environment variables documented and collected
- [ ] Vercel projects created (web and admin)
- [ ] Environment variables added to Vercel
- [ ] apps/web deployed to Vercel
- [ ] apps/admin deployed to Vercel
- [ ] Post-deployment health checks passed
- [ ] Functionality tests completed
- [ ] Performance verified
- [ ] Documentation updated with deployment URLs
- [ ] Rollback procedure tested (optional)

---

## Notes for AI Agents

When executing this deployment:

1. **Always test builds locally first** before deploying to Vercel
2. **Handle secrets securely** - never commit API keys or tokens
3. **Read error messages carefully** - they often contain the solution
4. **Check existing configurations** - don't overwrite working settings
5. **Deploy to preview first** - test before promoting to production
6. **Document any changes** - update this file if you discover new issues
7. **Follow the principle of least change** - only modify what's necessary
8. **Verify before confirming** - test each step before proceeding
9. **Keep user informed** - provide clear status updates
10. **Ask when uncertain** - better to clarify than to break production

---

_Last Updated: 2025_
_Version: 1.0_
