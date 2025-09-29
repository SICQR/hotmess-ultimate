-- seed/seed.sql
insert into public.shows (slug, title, host, channel, notes) values
('dial-a-daddy','Dial‑a‑Daddy', 'Daddy Hotline', 'Hotmess Radio', 'Call-ins, filth, aftercare'),
('hand-n-hand','Hand‑N‑Hand', 'Care Crew', 'Hand‑N‑Hand', 'Aftercare & safety');

-- example slot
insert into public.schedule_slots (day, start_time, end_time, show_id)
select 'Friday','21:00','23:00', id from public.shows where slug='dial-a-daddy' limit 1;
