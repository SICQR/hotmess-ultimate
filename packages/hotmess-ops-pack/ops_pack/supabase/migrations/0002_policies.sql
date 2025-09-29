-- 0002_policies.sql
-- Enable row level security
alter table public.users enable row level security;
alter table public.shows enable row level security;
alter table public.schedule_slots enable row level security;
alter table public.imaging_assets enable row level security;

-- Basic policies
create policy "users_self_read" on public.users
for select using (auth.uid() = id);

create policy "users_self_update" on public.users
for update using (auth.uid() = id);

-- Role helpers
create or replace function auth_ext.role() returns text language sql stable
as $$ select coalesce(current_setting('request.jwt.claims', true)::jsonb->>'role','member') $$;

-- Public read of shows/schedules
create policy "read_shows_everyone" on public.shows for select using (true);
create policy "read_schedule_everyone" on public.schedule_slots for select using (true);
create policy "read_imaging_everyone" on public.imaging_assets for select using (true);

-- Editors/Admins can write
create policy "editors_write_shows" on public.shows for all
using (auth_ext.role() in ('editor','admin')) with check (auth_ext.role() in ('editor','admin'));

create policy "editors_write_schedule" on public.schedule_slots for all
using (auth_ext.role() in ('editor','admin')) with check (auth_ext.role() in ('editor','admin'));

create policy "editors_write_imaging" on public.imaging_assets for all
using (auth_ext.role() in ('editor','admin')) with check (auth_ext.role() in ('editor','admin'));
