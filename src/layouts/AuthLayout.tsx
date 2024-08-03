import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Device } from '../styles/breakpoints';

export const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.bgTotal};
  .content-sidebar {
    display: none;
  }

  .content-sidebar-mobile {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .content-sidebar {
      display: initial;
    }
    .content-sidebar-mobile {
      display: none;
    }
  }
  .content-main {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`;
