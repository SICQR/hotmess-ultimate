-- OPTIONAL: Drop heavy/deprecated/remote extensions unless you need them.
-- Review before running.
DO $$
BEGIN
  -- Deprecated
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='pgjwt') THEN
    EXECUTE 'DROP EXTENSION pgjwt';
  END IF;

  -- Remote/networking surfaces (keep only if required)
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='pg_net') THEN
    EXECUTE 'DROP EXTENSION pg_net';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='wrappers') THEN
    EXECUTE 'DROP EXTENSION wrappers';
  END IF;

  -- Rare/heavy full-text and routing (drop unless you truly need)
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='pgroonga' OR extname='pgroonga_database') THEN
    EXECUTE 'DROP EXTENSION IF EXISTS pgroonga_database';
    EXECUTE 'DROP EXTENSION IF EXISTS pgroonga';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='pgrouting') THEN
    EXECUTE 'DROP EXTENSION pgrouting';
  END IF;

  -- PostGIS auxiliaries (keep core postgis if you use it; drop extras)
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='postgis_tiger_geocoder') THEN
    EXECUTE 'DROP EXTENSION postgis_tiger_geocoder';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='postgis_topology') THEN
    EXECUTE 'DROP EXTENSION postgis_topology';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname='postgis_raster') THEN
    EXECUTE 'DROP EXTENSION postgis_raster';
  END IF;
END $$;
