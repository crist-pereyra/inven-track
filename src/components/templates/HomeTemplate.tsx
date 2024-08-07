import styled from 'styled-components';
import { Header } from '../organisms/Header';
import { useState } from 'react';
import { Title } from '../atoms/Title';
import { CompanyBanner } from '../organisms/CompanyBanner';
export const HomeTemplate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Container>
      <header className='header'>
        <Header
          stateConfig={{
            state: isMenuOpen,
            setState: () => setIsMenuOpen(!isMenuOpen),
          }}
        />
      </header>
      <section className='area1'>
        <Title>Your Company</Title>
      </section>
      <section className='main'>
        <CompanyBanner />
      </section>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    'header' 100px
    'area1' 100px
    'main' auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .main {
    grid-area: main;
  }
`;
