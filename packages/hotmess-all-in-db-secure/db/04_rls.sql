-- Enable RLS + policies (idempotent, uuid casts)

-- USERS (keep existing; ensure enabled)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- XP LOG (SELECT your own)
ALTER TABLE public.xp_log ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS xp_log_select_owner ON public.xp_log;
CREATE POLICY xp_log_select_owner ON public.xp_log FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);

-- REPORTS (insert/view own)
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS reports_insert_owner ON public.reports;
DROP POLICY IF EXISTS reports_select_owner ON public.reports;
CREATE POLICY reports_insert_owner ON public.reports FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = reporter_id);
CREATE POLICY reports_select_owner ON public.reports FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = reporter_id);

-- RADIO SHOWS (public readable)
ALTER TABLE public.radio_shows ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS radio_shows_select_public ON public.radio_shows;
CREATE POLICY radio_shows_select_public ON public.radio_shows FOR SELECT TO anon, authenticated USING (true);

-- QR CODES (owner CRUD)
ALTER TABLE public.qr_codes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS qr_codes_all_owner ON public.qr_codes;
CREATE POLICY qr_codes_all_owner ON public.qr_codes FOR ALL TO authenticated
  USING ((SELECT auth.uid())::uuid = owner_id)
  WITH CHECK ((SELECT auth.uid())::uuid = owner_id);

-- PAYOUTS (view own)
ALTER TABLE public.payouts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS payouts_select_owner ON public.payouts;
CREATE POLICY payouts_select_owner ON public.payouts FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);

-- CONSENTS (CRUD own)
ALTER TABLE public.consents ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS consents_select_owner ON public.consents;
DROP POLICY IF EXISTS consents_insert_owner ON public.consents;
DROP POLICY IF EXISTS consents_update_owner ON public.consents;
DROP POLICY IF EXISTS consents_delete_owner ON public.consents;
CREATE POLICY consents_select_owner ON public.consents FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY consents_insert_owner ON public.consents FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY consents_update_owner ON public.consents FOR UPDATE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id)
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY consents_delete_owner ON public.consents FOR DELETE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);

-- EVENTS (CRUD own)
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS events_select_owner ON public.events;
DROP POLICY IF EXISTS events_insert_owner ON public.events;
DROP POLICY IF EXISTS events_update_owner ON public.events;
DROP POLICY IF EXISTS events_delete_owner ON public.events;
CREATE POLICY events_select_owner ON public.events FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY events_insert_owner ON public.events FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY events_update_owner ON public.events FOR UPDATE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id)
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY events_delete_owner ON public.events FOR DELETE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);

-- NOTIFICATIONS (CRUD own)
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS notifications_select_owner ON public.notifications;
DROP POLICY IF EXISTS notifications_insert_owner ON public.notifications;
DROP POLICY IF EXISTS notifications_update_owner ON public.notifications;
DROP POLICY IF EXISTS notifications_delete_owner ON public.notifications;
CREATE POLICY notifications_select_owner ON public.notifications FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY notifications_insert_owner ON public.notifications FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY notifications_update_owner ON public.notifications FOR UPDATE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id)
  WITH CHECK ((SELECT auth.uid())::uuid = user_id);
CREATE POLICY notifications_delete_owner ON public.notifications FOR DELETE TO authenticated
  USING ((SELECT auth.uid())::uuid = user_id);

-- QR SCANS (owned by scanner)
ALTER TABLE public.qr_scans ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS qr_scans_select_owner ON public.qr_scans;
DROP POLICY IF EXISTS qr_scans_insert_owner ON public.qr_scans;
DROP POLICY IF EXISTS qr_scans_update_owner ON public.qr_scans;
DROP POLICY IF EXISTS qr_scans_delete_owner ON public.qr_scans;
CREATE POLICY qr_scans_select_owner ON public.qr_scans FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = scanner_id);
CREATE POLICY qr_scans_insert_owner ON public.qr_scans FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = scanner_id);
CREATE POLICY qr_scans_update_owner ON public.qr_scans FOR UPDATE TO authenticated
  USING ((SELECT auth.uid())::uuid = scanner_id)
  WITH CHECK ((SELECT auth.uid())::uuid = scanner_id);
CREATE POLICY qr_scans_delete_owner ON public.qr_scans FOR DELETE TO authenticated
  USING ((SELECT auth.uid())::uuid = scanner_id);

-- AFFILIATE RELATIONS (dual ownership)
ALTER TABLE public.affiliate_relations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS aff_rel_select_owner_or_referred ON public.affiliate_relations;
DROP POLICY IF EXISTS aff_rel_insert_owner ON public.affiliate_relations;
DROP POLICY IF EXISTS aff_rel_update_owner ON public.affiliate_relations;
DROP POLICY IF EXISTS aff_rel_delete_owner ON public.affiliate_relations;
CREATE POLICY aff_rel_select_owner_or_referred ON public.affiliate_relations FOR SELECT TO authenticated
  USING ((SELECT auth.uid())::uuid = referrer_id OR (SELECT auth.uid())::uuid = referred_id);
CREATE POLICY aff_rel_insert_owner ON public.affiliate_relations FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())::uuid = referrer_id OR (SELECT auth.uid())::uuid = referred_id);
CREATE POLICY aff_rel_update_owner ON public.affiliate_relations FOR UPDATE TO authenticated
  USING ((SELECT auth.uid())::uuid = referrer_id OR (SELECT auth.uid())::uuid = referred_id)
  WITH CHECK ((SELECT auth.uid())::uuid = referrer_id OR (SELECT auth.uid())::uuid = referred_id);
CREATE POLICY aff_rel_delete_owner ON public.affiliate_relations FOR DELETE TO authenticated
  USING ((SELECT auth.uid())::uuid = referrer_id OR (SELECT auth.uid())::uuid = referred_id);
