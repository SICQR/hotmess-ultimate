# Quick Start Guide for HOTMESS Ultimate

This guide helps developers quickly get the HOTMESS Ultimate platform running locally and deployed to Vercel.

## 🚀 Quick Local Setup

### Prerequisites
- Node.js 20+ and npm 8+
- Git

### Clone and Install
```bash
# Clone the repository
git clone https://github.com/SICQR/hotmess-ultimate.git
cd hotmess-ultimate

# Install dependencies for web app
cd apps/web
npm install

# Install dependencies for admin app  
cd ../admin
npm install
```

### Set Up Environment Variables

Create `.env.local` files in each app directory:

**apps/web/.env.local**:
```bash
# Minimum required for local development
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**apps/admin/.env.local**:
```bash
# Minimum required for local development
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE=your_service_role_key
```

### Run Development Servers

```bash
# Terminal 1: Run web app
cd apps/web
npm run dev
# Visit http://localhost:3000

# Terminal 2: Run admin app
cd apps/admin
npm run dev
# Visit http://localhost:3001
```

## 🎯 Quick Vercel Deployment

### 1. One-Click Import

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SICQR/hotmess-ultimate)

### 2. Manual Steps

1. **Create Two Vercel Projects**:
   - Project 1: `hotmess-web` → Root Directory: `apps/web`
   - Project 2: `hotmess-admin` → Root Directory: `apps/admin`

2. **Add Environment Variables** (See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for full list):
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**: Push to main branch or click "Deploy" in Vercel dashboard

## 📁 Project Structure

```
hotmess-ultimate/
├── apps/
│   ├── web/              # Main public website (Next.js 15)
│   │   ├── app/          # App router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utility functions
│   │   └── public/       # Static assets
│   └── admin/            # Admin dashboard (Next.js 15)
│       ├── app/          # App router pages
│       └── components/   # Admin components
├── packages/             # Shared packages
├── docs/                 # Documentation
└── supabase/            # Database migrations
```

## 🔑 Key Features

### Public Website (apps/web)
- 📻 Live radio streaming
- 🎙️ Show listings and bios
- 👥 Host profiles
- 🛍️ Shop integration (Shopify)
- 💎 Membership tiers
- 💰 Affiliate program
- ⚖️ Legal pages & compliance

### Admin Dashboard (apps/admin)
- 📊 B2B analytics
- 💳 Payout management
- 📈 Leaderboards
- 🔔 Push notifications
- 🎯 CRM integration

## 🐛 Common Issues & Fixes

### Build Fails with "supabaseUrl is required"
**Fix**: Add environment variables in Vercel:
1. Go to Project Settings → Environment Variables
2. Add all required variables
3. Redeploy

### "Module not found" Errors
**Fix**: Ensure root directory is set correctly in Vercel:
- Web app: `apps/web`
- Admin app: `apps/admin`

### TypeScript Errors
**Fix**: Run type checking:
```bash
npm run lint
```

See [BUILD_FIXES_DOCUMENTATION.md](./BUILD_FIXES_DOCUMENTATION.md) for detailed error resolutions.

## 📚 Documentation

- **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** - Complete Vercel deployment instructions
- **[BUILD_FIXES_DOCUMENTATION.md](./BUILD_FIXES_DOCUMENTATION.md)** - Details of all build fixes
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-launch checklist
- **[ENV_VARS_MAP.md](./ENV_VARS_MAP.md)** - Environment variables reference

## 🧪 Testing

```bash
# Run linting
cd apps/web
npm run lint

# Build for production
npm run build

# Run production build locally
npm run start
```

## 🔐 Security Notes

- Never commit `.env` or `.env.local` files
- Use different keys for development and production
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only
- Enable Supabase Row Level Security (RLS)

## 📞 Support

For issues or questions:
1. Check the [troubleshooting section](./VERCEL_DEPLOYMENT_GUIDE.md#-troubleshooting-common-issues)
2. Review [build fixes](./BUILD_FIXES_DOCUMENTATION.md)
3. Open an issue on GitHub

## 🎉 Quick Deploy Checklist

Before deploying to production:
- [ ] Set all required environment variables
- [ ] Test build locally (`npm run build`)
- [ ] Configure Supabase database
- [ ] Set up third-party integrations (Shopify, Stripe, etc.)
- [ ] Configure DNS and custom domain
- [ ] Enable Vercel Analytics
- [ ] Test core features in preview deployment
- [ ] Review security settings

---

**Need more details?** See the full [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md).

**Encountered build errors?** Check the [Build Fixes Documentation](./BUILD_FIXES_DOCUMENTATION.md).
