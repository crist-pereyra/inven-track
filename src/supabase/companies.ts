import Swal from 'sweetalert2';
import { supabase } from './supabase.config';

export const getCompany = async (id: string) => {
  const { data, error } = await supabase
    .from('assign_companies')
    .select(`companies(id, name, currency)`)
    .eq('user_id', id)
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

export const countUsersPerCompany = async (id: string) => {
  const { data, error } = await supabase.rpc('count_users_per_company', {
    _company_id: id,
  });
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
  if (data) return data;
};
