# HOTMESS Ultimate - Vercel Deployment Guide

This repository contains comprehensive documentation and tools for deploying the HOTMESS Ultimate platform to Vercel.

## 📚 Documentation Files

### For AI Agents
- **[AGENT_PROMPT_VERCEL_DEPLOY.md](./AGENT_PROMPT_VERCEL_DEPLOY.md)** - Complete guide for AI agents to build, fix, and deploy to Vercel
- **[QUICKSTART_AGENT.md](./QUICKSTART_AGENT.md)** - TL;DR quick reference for agents

### For Developers
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment checklist
- **[ENV_VARS_MAP.md](./ENV_VARS_MAP.md)** - Environment variables mapping for apps/web and apps/admin
- **[README_Version9.md](./README_Version9.md)** - Detailed platform documentation

## 🚀 Quick Start

### Option 1: For AI Agents
```bash
# Read the comprehensive prompt
cat AGENT_PROMPT_VERCEL_DEPLOY.md

# Or use the quick start
cat QUICKSTART_AGENT.md
```

### Option 2: For Manual Deployment

```bash
# 1. Install dependencies
npm install

# 2. Build apps/web
cd apps/web
npm run build

# 3. Build apps/admin (optional)
cd apps/admin
npm run build

# 4. Deploy to Vercel
vercel --prod
```

## 🏗️ Project Structure

```
hotmess-ultimate/
├── apps/
│   ├── web/            # Public-facing website
│   └── admin/          # Admin dashboard
├── packages/           # Shared packages
├── AGENT_PROMPT_VERCEL_DEPLOY.md    # Comprehensive agent guide
├── QUICKSTART_AGENT.md              # Quick reference
├── DEPLOYMENT_CHECKLIST.md          # Deployment steps
└── ENV_VARS_MAP.md                  # Environment variables
```

## 🔑 Key Features

- **Next.js 15** with App Router
- **TypeScript** throughout
- **Supabase** for auth and database
- **Radio streaming** integration
- **E-commerce** ready
- **Affiliate program** built-in

## 📝 What Was Fixed

This deployment includes fixes for:
- ✅ Radio page (removed duplicate code)
- ✅ B2B dashboard (added proper types)
- ✅ API routes (multiple fixes)
- ✅ Next.js 15 compatibility (async params)
- ✅ Client component directives
- ✅ TypeScript type errors
- ✅ Build configuration issues

## 🌐 Deployment Options

### Via Vercel CLI
```bash
npm install -g vercel
cd apps/web
vercel --prod
```

### Via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import `SICQR/hotmess-ultimate`
3. Set root directory to `apps/web`
4. Add environment variables
5. Deploy

### Via GitHub Integration
- Push to `main` branch → auto-deploys to production
- Create PR → auto-creates preview deployment

## 🔧 Environment Variables

See [ENV_VARS_MAP.md](./ENV_VARS_MAP.md) for complete list.

### Required for apps/web:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`

### Required for apps/admin:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE`
- `ADMIN_ALLOWED_EMAILS`

## 🐛 Troubleshooting

### Build Fails with TypeScript Errors
```bash
npm run typecheck
# Fix reported errors
```

### Missing Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Found
```bash
# Copy example and fill in values
cp apps/web/.env.example apps/web/.env.local
```

## 📖 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js 15 Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs

## 🆘 Support

For deployment issues:
1. Check [AGENT_PROMPT_VERCEL_DEPLOY.md](./AGENT_PROMPT_VERCEL_DEPLOY.md) troubleshooting section
2. Review [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
3. Check Vercel deployment logs

## ✅ Success Criteria

Deployment is complete when:
- ✅ Both apps build without errors
- ✅ All environment variables configured
- ✅ Apps accessible via Vercel URLs
- ✅ Core functionality works (auth, API, radio)
- ✅ No console errors in browser
- ✅ SSL certificates active

---

**Last Updated**: 2025
**Version**: 1.0.0
