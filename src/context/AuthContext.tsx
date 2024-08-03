import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../index';

const AuthContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any | null>([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event: string, session: any) => {
        console.log(event, session);
        if (session?.user == null) {
          setUser(null);
        } else {
          setUser(session?.user);
        }
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
