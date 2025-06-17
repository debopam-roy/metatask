'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useSupabase } from '../lib/hooks/useSupabase';
import { SupabaseClient, User } from '../lib/supabase';

// Define the context type
interface SupabaseContextType {
  supabase: SupabaseClient;
  user: User | null;
  loading: boolean;
  error: Error | null;
}

// Create the context
const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

// Create a provider component
export function SupabaseProvider({ children }: { children: ReactNode }) {
  const supabaseData = useSupabase();
  
  return (
    <SupabaseContext.Provider value={supabaseData}>
      {children}
    </SupabaseContext.Provider>
  );
}

// Create a hook to use the Supabase context
export function useSupabaseContext() {
  const context = useContext(SupabaseContext);
  
  if (context === undefined) {
    throw new Error('useSupabaseContext must be used within a SupabaseProvider');
  }
  
  return context;
} 