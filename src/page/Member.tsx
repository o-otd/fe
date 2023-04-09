import Logo from 'components/Common/Logo';
import React from 'react';
import { ReactComponent as ValidationErrorSvg } from '../styles/images/icons/validation-error.svg';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../util/index';
import { IEmailSignInInputData } from 'types/SignIn';

const Auth = styled.section`
  margin-top: 24px;
  padding: 0 30px;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 25px;
  }

  & > p {
    margin-top: 22px;
    font-size: 14px;
    font-weight: 400;

    & a {
      margin-left: 15px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

const AuthForm = styled.form`
  width: 100%;
  padding: 22px 0 28px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
`;

const AuthFormInput = styled.div<{ formError: string }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  overflow: hidden;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};

    & > input {
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
      background-color: ${({ theme }) => theme.colors.gray3};
      padding: 16px;

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
        border-color: ${(props) =>
          props.formError ? props.theme.colors.error : props.theme.colors.main};
        outline: none;
      }

      &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray6};
      }
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  }
`;

const AuthFormLayout = styled.div`
  & ${AuthFormInput} {
    &:last-child {
      margin-top: 12px;
    }
  }
`;

const AuthUtill = styled.div`
  margin-top: 28px;
`;

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 400;
  margin-top: 12px;

  & svg {
    margin-right: 7px;
  }
`;

const LogInButton = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  position: relative;

  & button {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 15px;
    font-weight: 700;
  }
`;

const RegisterButton = styled.div`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.gray8};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  position: relative;

  & a {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 15px;
    font-weight: 700;
  }
`;

const AuthFind = styled.div`
  padding: 18px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray7};
`;

function Member() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailSignInInputData>();

  const onValid = (inputData: IEmailSignInInputData) => {
    console.log(inputData);
  };

  return (
    <Auth>
      <Logo />
      <h2>이메일로 로그인</h2>
      <AuthForm onSubmit={handleSubmit(onValid)}>
        <AuthFormLayout>
          <AuthFormInput formError={errors.email?.message!}>
            <div>
              <input
                autoComplete="off"
                type="text"
                {...register('email', {
                  required: '이메일 ID를 입력해주세요.',
                  pattern: {
                    value: emailRegex,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
                placeholder="이메일"
                autoFocus
              />
            </div>
          </AuthFormInput>

          <AuthFormInput formError={errors.password?.message!}>
            <div>
              <input
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                })}
                placeholder="비밀번호"
              />
            </div>
            {(errors.email || errors.password) && (
              <ErrorMessage>
                <ValidationErrorSvg />
                {errors.email?.message || errors.password?.message}
              </ErrorMessage>
            )}
          </AuthFormInput>
        </AuthFormLayout>

        <AuthUtill>
          <LogInButton>
            <button>로그인</button>
          </LogInButton>
          <RegisterButton>
            <a href="#">회원가입</a>
          </RegisterButton>
        </AuthUtill>
      </AuthForm>

      <AuthFind>
        <a href="#">비밀번호 재설정</a>
      </AuthFind>
    </Auth>
  );
}

export default Member;
