# GitHub Actions Workflows

This directory contains automated workflows for the HOTMESS Ultimate repository.

## Available Workflows

### Supabase Discovery Audit (`supabase-audit.yml`)

Automated workflow that runs the Supabase Discovery Kit to generate audit reports of your Supabase infrastructure.

**Triggers:**
- Manually via workflow_dispatch
- Automatically on push to `main` branch

**What it does:**
1. Checks out the repository
2. Sets up pnpm and Node.js
3. Installs dependencies in `packages/hotmess-supabase-discovery-kit`
4. Runs the discovery script with environment variables from secrets
5. Uploads the generated report.md and JSON files as workflow artifacts

**Setup Instructions:**
See [SUPABASE_AUDIT_SETUP.md](workflows/SUPABASE_AUDIT_SETUP.md) for detailed instructions on:
- Setting up required repository secrets
- Running the workflow manually
- Downloading audit reports
- Security best practices

**Required Secrets:**
- `SUPABASE_URL`
- `SUPABASE_SERVICE_KEY`
- `SUPABASE_ANON_KEY`
- `DATABASE_URL`

## Adding New Workflows

When adding new workflows:
1. Create a new `.yml` file in `.github/workflows/`
2. Follow GitHub Actions best practices
3. Document the workflow in this README
4. Add any required secrets to the setup documentation
