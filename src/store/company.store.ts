import { create } from 'zustand';
import { countUsersPerCompany, getCompany } from '../supabase/companies';

export const useCompanyStore = create((set, get) => ({
  companyData: [],
  usersCount: 0,
  getCompany: async (id: string) => {
    const response = await getCompany(id);
    set({ companyData: response });
    return response;
  },
  countUsersPerCompany: async (id: string) => {
    const response = await countUsersPerCompany(id);
    set({ usersCount: response });
    return response;
  },
}));
