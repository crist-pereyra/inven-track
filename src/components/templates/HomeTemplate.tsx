import styled from 'styled-components';
import { SaveButton } from '../molecules/SaveButton';
import { useAuthStore } from '../../store/auth.store';
export const HomeTemplate = () => {
  const signOut = useAuthStore((state: any) => state.signOut);
  return (
    <Container>
      Home
      <SaveButton title='Logout' bgColor='#fff' action={signOut} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
