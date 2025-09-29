-- Quick checks
SELECT extname, extversion FROM pg_extension ORDER BY 1;

SELECT schemaname, tablename, policyname, cmd
FROM pg_policies ORDER BY 1,2,3;

-- Inspect default privileges
SELECT defaclobjtype, defaclacl
FROM pg_default_acl
WHERE defaclnamespace = 'public'::regnamespace;

-- Check table grants snapshot
SELECT schemaname, tablename, relacl
FROM pg_tables WHERE schemaname='public' ORDER BY 1,2;
