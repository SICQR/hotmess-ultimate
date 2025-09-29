DB?=$(DATABASE_URL)

apply-all: schema defaults table-grants functions verify

schema:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/roles/00_schema_lockdown.sql

defaults:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/roles/01_default_privileges.sql

table-grants:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/roles/02_explicit_table_grants.sql

functions:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/roles/03_function_security.sql

readonly:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/roles/04_readonly_role.sql

verify:
	psql "$(DB)" -c "SELECT nspname, usename, has_schema_privilege(usename, nspname, 'USAGE') AS usage_ok FROM pg_namespace CROSS JOIN pg_user WHERE nspname='public' AND usename IN ('anon','authenticated','service_role');"
	psql "$(DB)" -c "SELECT schemaname, tablename, relacl FROM pg_tables WHERE schemaname='public' ORDER BY 1,2;"
