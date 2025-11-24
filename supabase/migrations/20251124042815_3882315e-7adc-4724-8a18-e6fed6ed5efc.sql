-- Create profiles table
create table public.profiles (
  id uuid not null references auth.users on delete cascade primary key,
  username text,
  avatar_url text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create policies
create policy "Profiles are viewable by everyone" 
on public.profiles 
for select 
using (true);

create policy "Users can update their own profile" 
on public.profiles 
for update 
using (auth.uid() = id);

create policy "Users can insert their own profile" 
on public.profiles 
for insert 
with check (auth.uid() = id);

-- Create function to handle new user signups
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data->>'username');
  return new;
end;
$$;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create notifications table
create table public.notifications (
  id uuid not null default gen_random_uuid() primary key,
  user_id uuid not null references auth.users on delete cascade,
  title text not null,
  message text not null,
  read boolean not null default false,
  created_at timestamp with time zone not null default now()
);

-- Enable RLS
alter table public.notifications enable row level security;

-- Policies for notifications
create policy "Users can view their own notifications" 
on public.notifications 
for select 
using (auth.uid() = user_id);

create policy "Users can update their own notifications" 
on public.notifications 
for update 
using (auth.uid() = user_id);

create policy "Users can delete their own notifications" 
on public.notifications 
for delete 
using (auth.uid() = user_id);

-- Create index for better performance
create index notifications_user_id_idx on public.notifications(user_id);
create index notifications_created_at_idx on public.notifications(created_at desc);