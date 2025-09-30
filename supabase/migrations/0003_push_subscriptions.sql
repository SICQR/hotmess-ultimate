-- 0003_push_subscriptions.sql
-- Create push_subscriptions table for web push notifications

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id text unique not null,
  endpoint text not null,
  p256dh_key text not null,
  auth_key text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Create index on user_id for faster lookups
create index if not exists push_subscriptions_user_id_idx on public.push_subscriptions(user_id);

-- Add comment to table
comment on table public.push_subscriptions is 'Stores web push notification subscriptions for users';
