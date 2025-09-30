# Supabase Discovery Kit - GitHub Actions Setup

This document explains how to set up the automated Supabase audit workflow using GitHub Actions.

## Overview

The workflow automates the Supabase Discovery Kit audit process by:
1. Running automatically on every push to the `main` branch
2. Available for manual execution via GitHub's workflow_dispatch trigger
3. Generating audit reports (report.md and JSON files) as downloadable artifacts

## Required Repository Secrets

To enable the workflow, you must configure the following secrets in your GitHub repository:

### Setting Up Secrets

1. Navigate to your repository on GitHub
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each of the following:

### Secret Configuration

#### SUPABASE_URL
- **Description**: Your Supabase project URL
- **Example**: `https://abcdefghijklmnop.supabase.co`
- **Where to find**: Supabase Dashboard → Project Settings → API → Project URL

#### SUPABASE_SERVICE_KEY
- **Description**: Your Supabase service role key (server-side only, never expose to clients)
- **Where to find**: Supabase Dashboard → Project Settings → API → service_role key
- **⚠️ Security Warning**: This key has full access to your database. Never commit it to source code or expose it publicly.

#### SUPABASE_ANON_KEY
- **Description**: Your Supabase anonymous (public) key
- **Where to find**: Supabase Dashboard → Project Settings → API → anon public key

#### DATABASE_URL
- **Description**: PostgreSQL connection string for direct database access
- **Format**: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
- **Where to find**: Supabase Dashboard → Project Settings → Database → Connection string → URI
- **Note**: If not provided, the audit will still run but skip database-specific queries (tables, RLS policies, etc.)

## Running the Workflow

### Automatic Execution
The workflow runs automatically on every push to the `main` branch.

### Manual Execution
1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Supabase Discovery Audit** workflow from the left sidebar
4. Click **Run workflow** button
5. Select the branch (usually `main`)
6. Click **Run workflow**

## Downloading Audit Reports

After the workflow completes:
1. Go to the workflow run page
2. Scroll to the **Artifacts** section at the bottom
3. Download:
   - `supabase-audit-report` - Contains the main report.md file
   - `supabase-audit-json` - Contains raw JSON data dumps

## Security Best Practices

1. **Rotate Keys Regularly**: Periodically rotate your Supabase API keys
2. **Review Access**: Only grant repository access to trusted users
3. **Audit Logs**: Regularly review workflow execution logs
4. **Secret Management**: Never log or expose secrets in workflow outputs
5. **Key Rotation**: If you suspect a key has been compromised:
   - Rotate immediately in Supabase Dashboard → Project Settings → API
   - Update the corresponding GitHub secret

## Troubleshooting

### Workflow Fails with "Missing Environment Variables"
- Ensure all required secrets are properly configured in GitHub Settings
- Check that secret names match exactly (case-sensitive)

### No Database Information in Report
- Verify `DATABASE_URL` secret is set correctly
- Check that the database password is correct
- Ensure the database allows connections from GitHub Actions IP addresses

### Permission Denied Errors
- Verify `SUPABASE_SERVICE_KEY` is the service role key, not the anon key
- Check that your Supabase project is active and accessible

## Workflow File Location

The workflow is defined in:
```
.github/workflows/supabase-audit.yml
```

## Local Development

To run the audit locally:

```bash
cd packages/hotmess-supabase-discovery-kit
cp .env.template .env
# Edit .env with your credentials
pnpm install
pnpm run discover
```

Output will be generated in `packages/hotmess-supabase-discovery-kit/output/`
