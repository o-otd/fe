import Logo from 'components/Common/Logo';
import React from 'react';
import { ReactComponent as ValidationErrorSvg } from '@svg/validation-error.svg';
import styled from 'styled-components';

function ResetPasswordForm() {
  return (
    <Auth>
      <Logo />
      <h2>비밀번호 재설정</h2>
      <p>example@naver.com의 비밀번호를 재설정합니다.</p>

      <AuthForm>
        <AuthFormLayout>
          <AuthFormInput>
            <label>새 비밀번호</label>
            <div>
              <input type="password" placeholder="비밀번호" autoFocus />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z"
                  fill="#D6FF5C"
                />
              </svg>
            </div>
          </AuthFormInput>

          <AuthFormInput>
            <label>새 비밀번호 확인</label>
            <div>
              <input type="password" placeholder="비밀번호 확인" />
            </div>
            <ErrorMessage>
              <ValidationErrorSvg />
              비밀번호가 일차히지 않습니다.
            </ErrorMessage>
          </AuthFormInput>
        </AuthFormLayout>

        <AuthUtil>
          <AuthFormInput>
            <SubmitButton>확인</SubmitButton>
          </AuthFormInput>
        </AuthUtil>
      </AuthForm>
    </Auth>
  );
}

export default ResetPasswordForm;

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

  & label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray8};
    margin-bottom: 8px;
    display: block;
  }

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

    & > svg {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

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
