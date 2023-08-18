import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ValidationErrorSvg } from '@svg/validation-error.svg';
import { useForm } from 'react-hook-form';
import { IResetEmailInputData } from 'types/Auth';
import { emailRegex } from '../../utils/index';
import { Input } from 'components/Auth';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetEmailInputData>();

  const onValid = (emailInput: IResetEmailInputData) => {
    console.log(emailInput);
  };
  return (
    <Auth>
      <Logo />
      <h2>비밀번호 재설정</h2>
      <p>
        가입하신 이메일 주소로 비밀번호 재설정 메일을 <br />
        보내드립니다.
      </p>

      <AuthForm onSubmit={handleSubmit(onValid)}>
        <div>
          <Input
            register={register('email', {
              required: '이메일 주소를 입력해주세요.',
              pattern: {
                value: emailRegex,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
            type="email"
            placeHolder="이메일"
            errors={errors.email?.message}
          >
            {errors.email?.message && (
              <ErrorMessage>
                <ValidationErrorSvg />
                {errors.email.message}
              </ErrorMessage>
            )}
          </Input>
        </div>

        <AuthUtil>
          <AuthFormInput>
            <SubmitButton>이메일 보내기</SubmitButton>
          </AuthFormInput>
        </AuthUtil>
      </AuthForm>
    </Auth>
  );
}

export default ResetPassword;

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
  }
`;

const AuthForm = styled.form`
  width: 100%;
  padding: 22px 0 28px 0;
`;

const AuthFormInput = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  & div {
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
      background-color: ${({ theme }) => theme.colors.gray3};
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
      padding: 16px;

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
        outline: none;
      }

      &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray6};
      }
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

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  position: relative;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 15px;
  font-weight: 700;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
`;

const AuthUtil = styled.div`
  margin-top: 28px;
`;
