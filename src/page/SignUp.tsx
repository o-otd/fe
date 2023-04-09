import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ValidationErrorSvg } from '../styles/images/icons/validation-error.svg';
import { useForm } from 'react-hook-form';
import { IEmailSignUpInputData } from 'types/SignIn';
import { emailRegex } from '../util/index';

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
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const AuthForm = styled.form`
  width: 100%;
  padding: 22px 0 28px 0;
`;

const AuthFormInput = styled.div<{ formError: string }>`
  width: 100%;
  overflow: hidden;
  position: relative;

  & label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray8};
    margin-bottom: 8px;
    display: block;
  }

  & > div,
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

  & > div {
    & > input {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.gray3};
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
      padding: 16px;

      &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray6};
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
        outline: none;
        border-color: ${(props) =>
          props.formError ? props.theme.colors.error : props.theme.colors.main};
      }
    }
  }
`;
const AuthFormPasswordInput = styled.div<{ formError: string }>`
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;

  & label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray8};
    margin-bottom: 8px;
    display: block;
  }

  & > div,
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

  & > div {
    & > input {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.gray3};
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
      padding: 16px;

      &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray6};
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
        outline: none;
        border-color: ${(props) =>
          props.formError ? props.theme.colors.error : props.theme.colors.main};
      }
    }
  }

  & > div + div {
    margin-top: 8px;
  }
`;

const AuthFormLayout = styled.div`
  & ${AuthFormInput} {
    &:last-child {
      margin-top: 20px;
    }
  }
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

const AuthUtil = styled.div`
  margin-top: 28px;
`;

const AuthFormSubmit = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  & button {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IEmailSignUpInputData>();

  const onValid = (signUpInputData: IEmailSignUpInputData) => {
    console.log(signUpInputData);
  };

  return (
    <Auth>
      <Logo />
      <h2>이메일로 회원가입</h2>

      <AuthForm onSubmit={handleSubmit(onValid)}>
        <AuthFormLayout>
          <AuthFormInput formError={errors.email?.message!}>
            <label>이메일 주소</label>
            <div>
              <input
                type="text"
                {...register('email', {
                  required: '이메일 ID를 입력해주세요. ',
                  pattern: {
                    value: emailRegex,
                    message: '올바른 이메이 형식이 아닙니다.',
                  },
                })}
                placeholder="이메일 주소"
                autoFocus
                autoComplete="off"
              />
            </div>
          </AuthFormInput>

          <AuthFormPasswordInput
            formError={
              errors.password?.message! || errors.passwordCheck?.message!
            }
          >
            <label>비밀번호</label>
            <div>
              <input
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                })}
                placeholder="비밀번호"
                autoFocus
              />
            </div>
            <div>
              <input
                type="password"
                {...register('passwordCheck', {
                  required: '비밀번호를 다시 한번 입력해주세요.',
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || '비밀번호가 일치하지 않습니다.'
                      );
                    },
                  },
                })}
                placeholder="비밀번호 확인"
                autoFocus
              />
            </div>
            {(errors.email?.message ||
              errors.password?.message ||
              errors.passwordCheck?.message) && (
              <ErrorMessage>
                <ValidationErrorSvg />
                {errors.email?.message ||
                  errors.password?.message ||
                  errors.passwordCheck?.message}
              </ErrorMessage>
            )}
          </AuthFormPasswordInput>

          <AuthFormInput formError={errors.nickName?.message!}>
            <label>닉네임</label>
            <div>
              <input
                type="text"
                autoComplete="off"
                {...register('nickName', {
                  required: '닉네임을 입력해주세요.',
                })}
                placeholder="닉네임"
                autoFocus
              />
            </div>
            {errors.nickName?.message && (
              <ErrorMessage>
                <ValidationErrorSvg />
                {errors.nickName.message}
              </ErrorMessage>
            )}
          </AuthFormInput>
        </AuthFormLayout>

        <AuthUtil>
          <AuthFormSubmit>
            <button>회원가입 완료</button>
          </AuthFormSubmit>
        </AuthUtil>
      </AuthForm>
    </Auth>
  );
}

export default SignUp;
