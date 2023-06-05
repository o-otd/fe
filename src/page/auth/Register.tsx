import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmailIconSvg } from '../../styles/images/icons/email-icon.svg';
import { ReactComponent as GoogleIconSvg } from '../../styles/images/icons/google-icon.svg';
import AuthSelectButton from 'components/Auth/AuthSelectButton';
import AuthBottomInfo from 'components/Auth/AuthBottomInfo';
import AuthFind from 'components/Auth/AuthFind';

function Register() {
  return (
    <Auth>
      <Logo />
      <h2>오늘의 옷장 회원가입</h2>
      <p>
        이미 계정이 있으세요? <a href="/signin">로그인</a>
      </p>
      <AuthSocialLists>
        <AuthSelectButton
          text="구글로 회원가입"
          href="#"
          icon={<GoogleIconSvg />}
        />

        <AuthSelectButton
          text="이메일로 회원가입"
          href="/signup"
          icon={<EmailIconSvg />}
        />
      </AuthSocialLists>

      <AuthFind />

      <AuthBottomInfo />
    </Auth>
  );
}

export default Register;

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

    & > a {
      margin-left: 15px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

const AuthSocialLists = styled.ul`
  width: 100%;
  padding: 22px 0 28px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};

  & > li {
    &:last-child {
      margin-top: 12px;
    }
  }
`;
