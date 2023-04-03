import Logo from 'components/Common/Logo';
import React from 'react';
import { ReactComponent as ValidationErrorSvg } from '../styles/images/icons/validation-error.svg';
import styled from 'styled-components';

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

const AuthFormInput = styled.div`
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
  border : 1px solid ${({ theme }) => theme.colors.main}
  outline : none;

  &  ${AuthFormInput} {
    &:last-child {
      margin-top : 12px;
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
  return (
    <Auth>
      <Logo />
      <h2>이메일로 로그인</h2>
      <AuthForm>
        <AuthFormLayout>
          <AuthFormInput>
            <div>
              <input type="text" placeholder="이메일" autoFocus />
            </div>
          </AuthFormInput>

          <AuthFormInput>
            <div>
              <input type="password" placeholder="비밀번호" />
            </div>
            <ErrorMessage>
              <ValidationErrorSvg />
              아이디 또는 비밀번호를 확인해주세요.
            </ErrorMessage>
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
