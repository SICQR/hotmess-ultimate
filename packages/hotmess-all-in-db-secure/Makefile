DB?=$(DATABASE_URL)

db-secure: ext schema defaults indexes rls service funcs verify

db-secure-plus: ext drop-ext schema defaults indexes rls service funcs verify

ext:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/00_extensions.sql

drop-ext:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/00b_extensions_optional_drop.sql

schema:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/01_schema_lockdown.sql

defaults:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/02_default_privileges.sql

indexes:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/03_indexes.sql

rls:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/04_rls.sql

service:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/05_service_tables.sql

funcs:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/06_functions.sql

verify:
	psql "$(DB)" -v ON_ERROR_STOP=1 -f db/99_verify.sql

list-ext:
	psql "$(DB)" -c "SELECT extname, extversion FROM pg_extension ORDER BY 1;"
