'use client';

import { useState, useEffect } from 'react';
import { supabase, User } from '../supabase';

export function useSupabase() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Get the current user on mount
    const getCurrentUser = async () => {
      try {
        setLoading(true);
        
        // Get session data
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }

        // Set the user if we have a session
        if (session) {
          setUser(session.user);
        }
      } catch (err) {
        console.error('Error getting current user:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    error,
    supabase
  };
} 