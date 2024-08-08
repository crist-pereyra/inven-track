import styled from 'styled-components';
import { SaveButton } from '../molecules/SaveButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {
  AdminRegister,
  FooterLogin,
  InputText,
  ThemeContext,
  useAuthStore,
  v,
} from '../..';
import { Device } from '../../styles/breakpoints';
import logo from '../../assets/logo.png';
import shoppingCart from '../../assets/shoppingCart.svg';
import { MdOutlineInfo } from 'react-icons/md';
import { useForm } from 'react-hook-form';
export function LoginTemplate() {
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTheme('light');
  }, []);
  const signInWithEmail = useAuthStore((state: any) => state.signInWithEmail);
  const [state, setState] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function signIn(data: any) {
    const response = await signInWithEmail({
      email: data.email,
      password: data.password,
    });
    if (response) {
      navigate('/');
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <div className='contentLogo'>
        <img src={logo}></img>
        <span>InvenTrack</span>
      </div>
      <div className='lateralBanner contentImg'>
        <img src={shoppingCart}></img>
      </div>

      <div className='contentCard'>
        <div className='card'>
          {state && <AdminRegister setState={() => setState(!state)} />}
          <Title>InvenTrack</Title>
          {error && <ErrorText>Incorrect email or password</ErrorText>}
          <span className='help'>
            {' '}
            You can create a new account or <br></br>request one from your
            employer. <MdOutlineInfo />
          </span>
          <p className='phrase'>Control your inventory.</p>
          <form onSubmit={handleSubmit(signIn)}>
            <InputText icon={<v.emailIcon />}>
              <input
                className='form__field'
                type='text'
                placeholder='email'
                {...register('email', {
                  required: true,
                })}
              />
              <label className='form__label'>email</label>
              {errors.email?.type === 'required' && <p>Required field</p>}
            </InputText>
            <InputText icon={<v.passwordIcon />}>
              <input
                className='form__field'
                type='password'
                placeholder='password'
                {...register('password', {
                  required: true,
                })}
              />
              <label className='form__label'>password</label>
              {errors.password?.type === 'required' && <p>Required field</p>}
            </InputText>
            <ContainerBtn>
              <SaveButton title='Start' bgColor='#fc6b32' />
              <SaveButton
                action={() => setState(!state)}
                title='Create Account'
                bgColor='#ffffff'
                type='button'
              />
            </ContainerBtn>
          </form>
        </div>
        <FooterLogin />
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #262626;
  @media ${Device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
  .contentLogo {
    position: absolute;
    top: 15px;
    font-weight: 700;
    display: flex;
    left: 15px;
    align-items: center;
    color: #fff;

    img {
      width: 50px;
    }
  }
  .square {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: 0.6s;
  }

  .lateralBanner {
    background-color: #fc6b32;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .contentCard {
    grid-column: 2;
    background-color: #ffffff;
    background-size: cover;
    z-index: 100;
    position: relative;
    gap: 30px;
    display: flex;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    justify-content: center;
    width: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .card {
      padding-top: 80px;
      width: 100%;
      @media ${Device.laptop} {
        width: 50%;
      }
    }
    .version {
      color: #727272;
      text-align: start;
    }
    .contentImg {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 40%;

        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }
    .phrase {
      color: #fc6c32;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .help {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #8d8d8d;
      font-size: 15px;
      font-weight: 500;
    }
    &:hover {
      .contentsvg {
        top: -100px;
        opacity: 1;
      }
      .square {
        transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
          skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
        color: red;
      }
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Title = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const ContainerBtn = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;
const ErrorText = styled.p`
  color: #fc7575;
`;
