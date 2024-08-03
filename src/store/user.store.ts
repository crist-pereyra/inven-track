import { create } from 'zustand';
import { supabase } from '../supabase/supabase.config';
import { insertUser } from '../supabase/users';

export const useUserStore = create((set, get) => ({
  insertAdminUser: async (params: any) => {
    const { data, error } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
    });
    console.log('userAuth', data);
    if (error) return null;
    const user = await insertUser({
      auth_id: data.user?.id,
      created_at: new Date(),
      user_type: 'admin',
    });
    return user;
  },
}));
