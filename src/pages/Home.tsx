import { useQuery } from '@tanstack/react-query';
import { HomeTemplate, useCompanyStore } from '../index';

export const Home = () => {
  const countUsersPerCompany = useCompanyStore(
    (state: any) => state.countUsersPerCompany
  );
  const companyData = useCompanyStore((state: any) => state.companyData);
  console.log(companyData);
  const { data } = useQuery({
    queryKey: ['count users per company', { id: companyData.companies?.id }],
    queryFn: () => countUsersPerCompany(companyData.companies?.id),
    enabled: !!companyData,
  });
  return <HomeTemplate />;
};
