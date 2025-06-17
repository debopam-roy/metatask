# Supabase Integration

This document explains how to set up and use Supabase in the MetaTask web application.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the `apps/web` directory with the following content:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace `your_supabase_url_here` and `your_supabase_anon_key_here` with your actual Supabase URL and anon key.

### 2. Restart the Development Server

After setting up the environment variables, restart your Next.js development server for the changes to take effect.

## Usage

### Basic Usage

Import the Supabase client in your components:

```tsx
// In client components (with 'use client' directive)
import { supabase } from '../lib/supabase';

// Example query
const { data, error } = await supabase
  .from('your_table')
  .select('*')
  .limit(10);
```

For server components, you can use the getSupabase function:

```tsx
// In server components
import { getSupabase } from '../lib/supabase';

// In a server action or server component
const supabase = getSupabase();
const { data, error } = await supabase
  .from('your_table')
  .select('*')
  .limit(10);
```

### Using the Context Hook

For React components, use the `useSupabaseContext` hook:

```tsx
import { useSupabaseContext } from '../context/SupabaseContext';

function YourComponent() {
  const { supabase, user, loading, error } = useSupabaseContext();
  
  // Now you can use supabase client and auth state
  // ...
}
```

### Example Component

Check out the `SupabaseExample.tsx` component for a working example of how to fetch data from Supabase.

## Database Schema Setup

### Creating Tables

You'll need to create your tables in the Supabase dashboard. Here's an example SQL for creating a simple "examples" table:

```sql
CREATE TABLE examples (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  name TEXT NOT NULL,
  description TEXT
);

-- Insert some example data
INSERT INTO examples (name, description) VALUES 
  ('Example 1', 'This is the first example'),
  ('Example 2', 'This is the second example'),
  ('Example 3', 'This is the third example');
```

## Authentication

Supabase provides authentication out of the box. Here's a simple example of how to sign in a user:

```tsx
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
});
```

## Further Resources

- [Supabase Documentation](https://supabase.io/docs)
- [Supabase JavaScript Client](https://supabase.io/docs/reference/javascript/installing)
- [Supabase Auth](https://supabase.io/docs/guides/auth)
- [Supabase Database](https://supabase.io/docs/guides/database) 