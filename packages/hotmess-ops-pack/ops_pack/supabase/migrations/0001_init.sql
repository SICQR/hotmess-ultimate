-- 0001_init.sql
-- Core tables for HOTMESS
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  handle text unique not null,
  display_name text,
  avatar_url text,
  role text not null default 'member',
  created_at timestamptz not null default now()
);

create table if not exists public.shows (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  host text,
  channel text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.schedule_slots (
  id uuid primary key default gen_random_uuid(),
  day text not null check (day in ('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday')),
  start_time time not null,
  end_time time not null,
  show_id uuid references public.shows(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.imaging_assets (
  id uuid primary key default gen_random_uuid(),
  filename text not null,
  category text not null,
  usage text,
  size_mb numeric,
  created_at timestamptz not null default now()
);
