import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../index';

const AuthContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
        async (event: string, session: any) => {
          setUser(session?.user ?? null);
        };
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
