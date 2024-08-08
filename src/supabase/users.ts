import Swal from 'sweetalert2';
import { supabase } from './supabase.config';
import { getSupabaseId } from './global';

export const insertUser = async (user: any) => {
  const { data, error } = await supabase
    .from('users')
    .insert(user)
    .select()
    .maybeSingle();
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:
        'We could not create your account, please try again. ' + error.message,
    });
  }
  if (data) return data;
};

export const getUser = async () => {
  const supabaseId = await getSupabaseId();
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('auth_id', supabaseId)
    .maybeSingle();
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
  if (data) return data;
};
