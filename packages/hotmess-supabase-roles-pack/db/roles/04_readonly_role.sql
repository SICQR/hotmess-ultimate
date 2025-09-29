-- Optional: use built-in supabase_read_only_user for BI tools, etc.
-- Ensure it can read public tables that should be reportable.
GRANT USAGE ON SCHEMA public TO supabase_read_only_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO supabase_read_only_user;
