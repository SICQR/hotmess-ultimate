-- Schema-level lockdown for `public`
-- Revoke inherited privileges from PUBLIC and set explicit grants.
REVOKE ALL ON SCHEMA public FROM PUBLIC;

-- Allow only explicit roles to use the schema
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE, CREATE ON SCHEMA public TO service_role;

-- Prevent table creation by anon/authenticated
REVOKE CREATE ON SCHEMA public FROM anon, authenticated;
