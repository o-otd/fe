import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmailIconSvg } from '../styles/images/icons/email-icon.svg';
import { ReactComponent as GoogleIconSvg } from '../styles/images/icons/google-icon.svg';
import AuthSelectButton from 'components/SignIn/AuthSelectButton';
import { Link } from 'react-router-dom';

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

const AuthFind = styled.div`
  padding: 18px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray7};
`;

const AuthInfo = styled.div`
  margin-top: 9px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
`;

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
      <AuthFind>
        <Link to={'/reset'}>비밀번호 재설정</Link>
      </AuthFind>

      <AuthInfo>
        SNS로 로그인 및 회원가입 시 오늘의옷장의 이용약관과
        <br />
        개인정보 수집 및 이용에 동의한 것으로 간주합니다.
      </AuthInfo>
    </Auth>
  );
}

export default SignIn;
