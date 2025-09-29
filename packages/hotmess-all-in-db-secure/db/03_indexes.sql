-- Canonical unique indexes
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username      ON public.users(username);
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email         ON public.users(email);
CREATE UNIQUE INDEX IF NOT EXISTS idx_radio_shows_slug    ON public.radio_shows(slug);

-- FK/ownership fast-path indexes
CREATE INDEX IF NOT EXISTS idx_xp_log_user_id            ON public.xp_log(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_log_affiliate_id       ON public.xp_log(affiliate_id);
CREATE INDEX IF NOT EXISTS idx_reports_reporter_id       ON public.reports(reporter_id);
CREATE INDEX IF NOT EXISTS idx_reports_target_id         ON public.reports(target_id);
CREATE INDEX IF NOT EXISTS idx_qr_codes_owner_id         ON public.qr_codes(owner_id);
CREATE INDEX IF NOT EXISTS idx_qr_scans_qr_id            ON public.qr_scans(qr_id);
CREATE INDEX IF NOT EXISTS idx_qr_scans_scanner_id       ON public.qr_scans(scanner_id);
CREATE INDEX IF NOT EXISTS idx_aff_rel_referrer_id       ON public.affiliate_relations(referrer_id);
CREATE INDEX IF NOT EXISTS idx_aff_rel_referred_id       ON public.affiliate_relations(referred_id);
CREATE INDEX IF NOT EXISTS idx_payouts_user_id           ON public.payouts(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id     ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor_id       ON public.audit_logs(actor_id);
CREATE INDEX IF NOT EXISTS idx_consents_user_id          ON public.consents(user_id);
CREATE INDEX IF NOT EXISTS idx_events_user_id            ON public.events(user_id);
