-- Lock down `public` schema
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE, CREATE ON SCHEMA public TO service_role;
REVOKE CREATE ON SCHEMA public FROM anon, authenticated;
