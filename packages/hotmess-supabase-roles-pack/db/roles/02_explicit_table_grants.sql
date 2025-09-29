-- Explicit table grants matching your canonical tables and RLS posture.
-- With RLS enabled, SELECT merely permits the attempt; policies still decide row visibility.

-- Read-mostly public content:
GRANT SELECT ON TABLE public.radio_shows TO anon, authenticated;

-- User-owned tables (RLS on): allow authenticated to SELECT; INSERT/UPDATE/DELETE controlled by RLS
GRANT SELECT ON TABLE public.users, public.xp_log, public.reports, public.qr_codes, public.qr_scans,
                            public.affiliate_relations, public.payouts, public.notifications,
                            public.consents, public.events
TO authenticated;

-- Service role: full data-plane privileges
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER
ON ALL TABLES IN SCHEMA public TO service_role;

-- Future-proof: apply to future tables as well (see default privileges script)
