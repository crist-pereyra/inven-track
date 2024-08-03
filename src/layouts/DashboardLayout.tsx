import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Device } from '../styles/breakpoints';
import { useState } from 'react';
import { Sidebar } from '../components/organisms/sidebar/Sidebar';
import { SidebarMobile } from '../components/organisms/SidebarMobile';
import { UserAuth } from '../context/AuthContext';

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = UserAuth();
  if (!user) return <Navigate replace to='/auth/login' />;
  return (
    <>
      <Container className={isSidebarOpen ? 'active' : ''}>
        <section className='content-sidebar'>
          <Sidebar
            state={isSidebarOpen}
            setState={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </section>
        <section className='content-sidebar-mobile'>
          <SidebarMobile />
        </section>
        <section className='content-main'>
          <Outlet />
        </section>
      </Container>
    </>
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
