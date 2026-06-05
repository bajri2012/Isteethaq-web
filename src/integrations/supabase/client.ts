import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL) {
  console.error('[Supabase] ⚠️ VITE_SUPABASE_URL is undefined. Check your .env or Vercel environment variables.');
}
if (!SUPABASE_PUBLISHABLE_KEY) {
  console.error('[Supabase] ⚠️ VITE_SUPABASE_PUBLISHABLE_KEY is undefined. Check your .env or Vercel environment variables.');
}

export const supabase = createClient<Database>(
  SUPABASE_URL ?? '',
  SUPABASE_PUBLISHABLE_KEY ?? '',
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);