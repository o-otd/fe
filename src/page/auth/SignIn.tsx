import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmailIconSvg } from '@svg/email-icon.svg';
import { ReactComponent as GoogleIconSvg } from '@svg/google-icon.svg';
import { AuthBottomInfo, AuthFind, AuthSelectButton } from 'components/Auth';

function SignIn() {
  return (
    <Auth>
      <Logo />
      <h2>오늘의 옷장 로그인</h2>
      <p>
        계정이 없으세요?
        <a href="/signin/register">회원가입</a>
      </p>
      <AuthSocialLists>
        <AuthSelectButton
          text="구글로 로그인"
          href="#"
          icon={<GoogleIconSvg />}
        />

        <AuthSelectButton
          text="이메일로 로그인"
          href="/signin/member"
          icon={<EmailIconSvg />}
        />
      </AuthSocialLists>

      <AuthFind />

      <AuthBottomInfo />
    </Auth>
  );
}

export default SignIn;

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
