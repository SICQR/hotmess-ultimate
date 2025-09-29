-- GDPR export/delete; SECURITY INVOKER; safe search_path; uuid casts

CREATE OR REPLACE FUNCTION public.export_user_data()
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE result jsonb;
BEGIN
  PERFORM set_config('search_path','', true);
  SELECT jsonb_build_object(
    'consents',            (SELECT jsonb_agg(row_to_json(c)) FROM public.consents c WHERE c.user_id = (SELECT auth.uid())::uuid),
    'events',              (SELECT jsonb_agg(row_to_json(e)) FROM public.events e WHERE e.user_id = (SELECT auth.uid())::uuid),
    'notifications',       (SELECT jsonb_agg(row_to_json(n)) FROM public.notifications n WHERE n.user_id = (SELECT auth.uid())::uuid),
    'qr_scans',            (SELECT jsonb_agg(row_to_json(q)) FROM public.qr_scans q WHERE q.scanner_id = (SELECT auth.uid())::uuid),
    'affiliate_relations', (SELECT jsonb_agg(row_to_json(a)) FROM public.affiliate_relations a WHERE a.referrer_id = (SELECT auth.uid())::uuid OR a.referred_id = (SELECT auth.uid())::uuid),
    'xp_log',              (SELECT jsonb_agg(row_to_json(x)) FROM public.xp_log x WHERE x.user_id = (SELECT auth.uid())::uuid)
  ) INTO result;
  RETURN result;
END;
$$;

CREATE OR REPLACE FUNCTION public.delete_user_data()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM set_config('search_path','', true);
  DELETE FROM public.consents WHERE user_id = (SELECT auth.uid())::uuid;
  DELETE FROM public.events WHERE user_id = (SELECT auth.uid())::uuid;
  DELETE FROM public.notifications WHERE user_id = (SELECT auth.uid())::uuid;
  DELETE FROM public.qr_scans WHERE scanner_id = (SELECT auth.uid())::uuid;
  DELETE FROM public.affiliate_relations WHERE referrer_id = (SELECT auth.uid())::uuid OR referred_id = (SELECT auth.uid())::uuid;
  DELETE FROM public.xp_log WHERE user_id = (SELECT auth.uid())::uuid;
END;
$$;

-- Lock down EXECUTE
REVOKE EXECUTE ON FUNCTION public.export_user_data() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.delete_user_data() FROM PUBLIC, anon;
GRANT  EXECUTE ON FUNCTION public.export_user_data() TO authenticated, service_role;
GRANT  EXECUTE ON FUNCTION public.delete_user_data() TO authenticated, service_role;
