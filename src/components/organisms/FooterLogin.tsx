import styled from 'styled-components';
import { GiPadlock } from 'react-icons/gi';
export function FooterLogin() {
  return (
    <Container>
      <section className='lock'>
        <GiPadlock />
        <span>
          This is a secure page. If you have any questions about the
          authenticity of the website, please contact us <br /> at 311-9898 or
          through our digital media.
        </span>
      </section>
      <section className='derechos'>
        <span>InvenTrack S.A - RUC: 20100047218</span>
        <div className='separator'></div>
        {/* <span>Todos los derechos reservados</span>
        <div className='separator'></div> */}
        <span>© {new Date().getFullYear()} crist-pereyra</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap: 5px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183, 0.3);
    gap: 5px;
    display: flex;
    align-items: center;
  }
  .derechos {
    display: flex;
    justify-content: space-between;
    .separator {
      width: 1px;
      background-color: rgba(145, 164, 183, 0.3);
      margin-top: 4px;
      height: 80%;
      align-items: center;
      display: flex;
    }
    span {
      margin-top: 5px;
    }
  }
`;
