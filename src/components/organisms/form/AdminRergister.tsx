import styled from 'styled-components';
import { v } from '../../../styles/variables';
import { useForm } from 'react-hook-form';
import { MdAlternateEmail, MdClose } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/user.store';
import { InputText } from './InputText';
import { SaveButton } from '../../molecules/SaveButton';
import { useState } from 'react';

interface Props {
  setState: any;
}
export function AdminRegister({ setState }: Props) {
  const insertAdminUser = useUserStore((state: any) => state.insertAdminUser);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const params = {
        email: data.email,
        password: data.password,
        user_type: 'admin',
      };
      const dt = await insertAdminUser(params);
      if (dt) {
        navigate('/');
      } else {
        setError(!error);
      }
    },
  });
  return (
    <Container>
      <ContentClose>
        <span onClick={setState}>
          <MdClose />
        </span>
      </ContentClose>
      <section className='subContainer'>
        <div className='headers'>
          <section>
            <h1>Admin Register</h1>
          </section>
        </div>

        <form
          className='form'
          onSubmit={handleSubmit((data) => mutation.mutateAsync(data))}
        >
          <section>
            <article>
              <InputText icon={<MdAlternateEmail />}>
                <input
                  className='form__field'
                  style={{ textTransform: 'lowercase' }}
                  type='text'
                  placeholder='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                <label className='form__label'>email</label>
                {errors.email?.type === 'pattern' && (
                  <p>The email format is incorrect</p>
                )}
                {errors.email?.type === 'required' && <p>Field required</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<RiLockPasswordLine />}>
                <input
                  className='form__field'
                  type='text'
                  placeholder='password'
                  {...register('password', {
                    required: true,
                  })}
                />
                <label className='form__label'>pass</label>
                {errors.password?.type === 'required' && <p>Field required</p>}
              </InputText>
            </article>
            <div className='SaveBtnContent'>
              <SaveButton
                icon={<v.saveIcon />}
                title='Save'
                bgColor='#ff7556'
              />
            </div>
          </section>
        </form>
      </section>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
  padding: 13px 36px 20px 36px;
  z-index: 100;
  display: flex;

  align-items: center;
  .subContainer {
    width: 100%;
  }

  .headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      font-size: 20px;
      font-weight: 500;
    }
    span {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .form {
    section {
      gap: 20px;
      display: flex;
      flex-direction: column;
      .colorContainer {
        .colorPickerContent {
          padding-top: 15px;
          min-height: 50px;
        }
      }
    }
  }
`;

const ContentClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 33px;
  margin: 30px;
  cursor: pointer;
`;
