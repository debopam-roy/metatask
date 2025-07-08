# MetaTask API

This is the backend API for the MetaTask platform, built with NestJS and Supabase.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file in the root directory with the following content:
```
# API Configuration
PORT=3001

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Replace the Supabase credentials with your own from the Supabase dashboard:
   - Go to your Supabase project dashboard
   - Navigate to Project Settings > API
   - Copy the URL, service role key, and anon key

## Database Setup

Create the following tables in your Supabase database:

### newsletter_subscribers

```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX newsletter_subscribers_email_idx ON newsletter_subscribers (email);
```

## Running the API

### Development mode
```bash
pnpm run dev
```

### Production mode
```bash
pnpm run build
pnpm run start:prod
```

## API Endpoints

- `GET /api` - Get API overview
- `POST /api/newsletter-subscription` - Subscribe to newsletter

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | The port the API will run on |
| SUPABASE_URL | Your Supabase project URL |
| SUPABASE_SERVICE_ROLE_KEY | Your Supabase service role key (for server-side operations) |
| SUPABASE_ANON_KEY | Your Supabase anon key (for client-side operations) |