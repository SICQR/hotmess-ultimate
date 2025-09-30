# HOTMESS Ultimate

**Bold. Luxury. Modern.** Men-only 18+ radio platform with consent-first, care-first approach.

This repository contains the complete HOTMESS Ultimate platform, including the public website, admin dashboard, and supporting infrastructure.

## 🚀 Quick Start

New to the project? Start here:

**👉 [Quick Start Guide](./QUICK_START.md)** - Get running in 5 minutes

## 📚 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Fast setup for local development
- **[Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md)** - Complete deployment instructions
- **[Build Fixes Documentation](./BUILD_FIXES_DOCUMENTATION.md)** - Details of all build error resolutions
- **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Pre-launch verification steps
- **[Environment Variables Map](./ENV_VARS_MAP.md)** - All required and optional env vars

## 🎯 Key Features

### Public Website (`apps/web`)
- 📻 **Live Radio Streaming** - High-quality audio with RadioKing integration
- 🎙️ **Show Listings** - Browse shows with dynamic hosts and schedules
- 👥 **Host Profiles** - Detailed bios and external links
- 🛍️ **Shop Integration** - Shopify-powered merchandise storefront
- 💎 **Membership Tiers** - Free and PRO subscription options
- 💰 **Affiliate Program** - 15% commission with QR code generation
- ⚖️ **Legal Compliance** - Complete legal hub with GDPR, age verification, and more

### Admin Dashboard (`apps/admin`)
- 📊 **B2B Analytics** - Partner performance tracking
- 💳 **Payout Management** - Affiliate commission processing
- 📈 **Leaderboards** - Top performer rankings
- 🔔 **Push Notifications** - Web push to subscribers
- 🎯 **CRM Integration** - Salesforce lead management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL + Auth)
- **Hosting**: Vercel
- **Streaming**: RadioKing
- **E-commerce**: Shopify
- **Payments**: Stripe
- **Notifications**: Telegram + Web Push

## 📦 Project Structure

```
hotmess-ultimate/
├── apps/
│   ├── web/              # Main public website
│   └── admin/            # Admin dashboard
├── packages/             # Shared packages & tools
│   ├── hotmess-ops-pack/
│   ├── hotmess-supabase-discovery-kit/
│   └── ...
├── docs/                 # Documentation
├── supabase/            # Database migrations & seeds
└── ops/                 # Operational configs (radio, automation)
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20+ and npm 8+
- Supabase account and project
- Vercel account (for deployment)

### Local Development

```bash
# Clone the repository
git clone https://github.com/SICQR/hotmess-ultimate.git
cd hotmess-ultimate

# Install and run web app
cd apps/web
npm install
npm run dev  # Visit http://localhost:3000

# Install and run admin app (in another terminal)
cd apps/admin
npm install
npm run dev  # Visit http://localhost:3001
```

See [Quick Start Guide](./QUICK_START.md) for detailed setup instructions.

## 🌐 Deployment

Ready to deploy? Follow the comprehensive:

**👉 [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md)**

Key steps:
1. Create two Vercel projects (web + admin)
2. Set environment variables
3. Configure build settings
4. Deploy!

## 🔧 Recent Fixes

This project recently underwent a comprehensive build error resolution. All critical issues have been fixed:

- ✅ Fixed syntax errors in multiple components
- ✅ Updated to Next.js 15 async params pattern
- ✅ Added "use client" directives where needed
- ✅ Resolved TypeScript type errors
- ✅ Fixed Supabase client initialization for build-time safety
- ✅ Updated Stripe API to latest version
- ✅ Improved .gitignore to exclude build artifacts

See [Build Fixes Documentation](./BUILD_FIXES_DOCUMENTATION.md) for complete details.

## 🧪 Testing

```bash
# Lint the code
npm run lint

# Build for production
npm run build

# Run production build locally
npm run start
```

## 📋 Environment Variables

Required environment variables for both apps:

```bash
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

See [Environment Variables Map](./ENV_VARS_MAP.md) for the complete list.

## 🔐 Security

- Never commit `.env` or `.env.local` files
- Use Vercel's encrypted environment variable storage
- Keep service role keys server-side only
- Enable Supabase Row Level Security (RLS)
- Rotate secrets regularly

## 🤝 Contributing

Pull requests are welcome! For major changes:
1. Open an issue first to discuss the change
2. Ensure all tests pass
3. Update documentation as needed
4. Follow the existing code style

## 📄 License

[MIT](LICENSE)

## 🆘 Support

Having issues?
1. Check the [Troubleshooting Guide](./VERCEL_DEPLOYMENT_GUIDE.md#-troubleshooting-common-issues)
2. Review [Build Fixes](./BUILD_FIXES_DOCUMENTATION.md)
3. Open an issue on GitHub

---

**Built with ❤️ by the HOTMESS team**  
Clean lines. Dirty energy.

