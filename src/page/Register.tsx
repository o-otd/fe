import Logo from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmailIconSvg } from '../styles/images/icons/email-icon.svg';
import { ReactComponent as GoogleIconSvg } from '../styles/images/icons/google-icon.svg';

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

const AuthSocialList = styled.li`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  overflow: hidden;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 15px;
    font-weight: 500;

    & svg {
      margin-right: 7px;
    }

    & svg:first-child {
      margin-left: 4px;
    }
  }
`;

const AuthSocialLists = styled.ul`
  width: 100%;
  padding: 22px 0 28px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};

  & ${AuthSocialList} {
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

function Register() {
  return (
    <Auth>
      <Logo />
      <h2>오늘의 옷장 회원가입</h2>
      <p>
        이미 계정이 있으세요? <a href="/signin">로그인</a>
      </p>
      <AuthSocialLists>
        <AuthSocialList>
          <a href="#">
            <GoogleIconSvg />
            구글로 회원가입
          </a>
        </AuthSocialList>
        <AuthSocialList>
          <a href="/signup">
            <EmailIconSvg />
            이메일로 회원가입
          </a>
        </AuthSocialList>
      </AuthSocialLists>
      <AuthFind>
        <a href="#">아이디 찾기</a>
      </AuthFind>

      <AuthInfo>
        SNS로 로그인 및 회원가입 시 오늘의옷장의 이용약관과
        <br />
        개인정보 수집 및 이용에 동의한 것으로 간주합니다.
      </AuthInfo>
    </Auth>
  );
}

export default Register;
