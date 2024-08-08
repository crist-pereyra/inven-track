import styled from 'styled-components';
import { UserAuth } from '../../context/AuthContext';
import { useAuthStore } from '../../store/auth.store';
import { v } from '../../styles/variables';
import { CircularButton } from '../molecules/CircularButton';
import { DropdownMenu } from './DropdownMenu';
import { userMenu } from '../../constants/staticData';

interface Props {
  stateConfig: {
    state: boolean;
    setState: any;
  };
}
export function Header({ stateConfig }: Props) {
  const signOut = useAuthStore((state: any) => state.signOut);
  const { user } = UserAuth();
  const executeAction = async (p: any) => {
    if (p.type === 'logout') {
      await signOut();
    }
  };
  return (
    <Container>
      <UserData onClick={stateConfig.setState}>
        <div className='imgContainer'>
          <img src='https://i.ibb.co/kGYgRZ8/programador.png' />
        </div>
        <CircularButton
          icon={<v.crownIcon />}
          width='25px'
          height='25px'
          bgColor={`linear-gradient(15deg, rgba(255, 88, 58, 0.86) 9%, #f8bf5b 100%);`}
          textColor='#ffffff'
          fontSize='11px'
          translateX='-50px'
          translateY='-12px'
        />
        <span className='name'>{user.email}</span>
        {stateConfig.state && (
          <DropdownMenu
            data={userMenu}
            top='62px'
            action={(p: any) => executeAction(p)}
          />
        )}
      </UserData>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;
`;
const UserData = styled.div`
  z-index: 10;
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .name {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
