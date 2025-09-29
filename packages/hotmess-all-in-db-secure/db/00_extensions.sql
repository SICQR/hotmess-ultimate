-- Core extensions we keep
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS citext;
-- Optional but common in Supabase projects
CREATE EXTENSION IF NOT EXISTS pg_graphql;
