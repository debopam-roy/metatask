import { createClient } from '@supabase/supabase-js';

// These environment variables will need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.');
}

// Create a singleton Supabase client that can be used in both client and server components
let supabaseInstance: ReturnType<typeof createClient> | undefined;

export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;
  
  supabaseInstance = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
  );
  
  return supabaseInstance;
};

// Create a single supabase client for the entire app
export const supabase = getSupabase();

// Export types for better TypeScript support
export type { 
  SupabaseClient,
  Session,
  User,
  PostgrestError
} from '@supabase/supabase-js'; 