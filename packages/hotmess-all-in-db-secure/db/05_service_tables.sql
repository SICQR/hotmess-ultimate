-- Service-managed table example: membership_tiers
ALTER TABLE public.membership_tiers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS membership_tiers_select ON public.membership_tiers;
DROP POLICY IF EXISTS membership_tiers_manage ON public.membership_tiers;
CREATE POLICY membership_tiers_select ON public.membership_tiers FOR SELECT TO authenticated USING (true);
CREATE POLICY membership_tiers_manage ON public.membership_tiers FOR ALL TO service_role USING (true) WITH CHECK (true);
