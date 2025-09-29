-- Function security guidance.
-- Convert functions to SECURITY INVOKER (default) and revoke EXECUTE from anon unless intentionally public.
-- Example patterns; adjust to your actual function names.

-- Example: protect GDPR functions
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace
             WHERE n.nspname='public' AND p.proname='export_user_data') THEN
    REVOKE EXECUTE ON FUNCTION public.export_user_data() FROM PUBLIC, anon;
    GRANT  EXECUTE ON FUNCTION public.export_user_data() TO authenticated, service_role;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace
             WHERE n.nspname='public' AND p.proname='delete_user_data') THEN
    REVOKE EXECUTE ON FUNCTION public.delete_user_data() FROM PUBLIC, anon;
    GRANT  EXECUTE ON FUNCTION public.delete_user_data() TO authenticated, service_role;
  END IF;
END $$;

-- Force SECURITY INVOKER by recreating (no-op if already invoker).
-- CREATE OR REPLACE FUNCTION public.export_user_data() ...  -- ensure no SECURITY DEFINER
-- CREATE OR REPLACE FUNCTION public.delete_user_data() ...  -- ensure no SECURITY DEFINER
