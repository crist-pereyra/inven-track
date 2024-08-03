import { create } from 'zustand';
import { supabase } from '../supabase/supabase.config';
export const useAuthStore = create((set, get) => ({
  signInWithEmail: async (params: any) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    });
    if (error) {
      return null;
    }
    return data.user;
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error(`Error signing out: ${error.message}` || error.message);
  },
}));
