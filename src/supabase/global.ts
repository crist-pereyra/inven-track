import { supabase } from './supabase.config';

export const getSupabaseId = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session != null) return session.user.id;
};
