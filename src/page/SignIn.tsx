import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.mainbackground};
  padding-top: 47px;
  height: 100vh;
`;

const HeaderRectangle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.ligthgray};
  margin: 25px 0;
`;

const Main = styled.main`
  & h1 {
    font-size: 24px;
    line-height: 127.3%;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const HeaderButton = styled.div`
  margin: 22px 0;
  font-size: 14px;
  line-height: 127.3%;
  & span:first-child {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 15px;
    cursor: pointer;
  }

  & span:last-child {
    color: ${({ theme }) => theme.colors.content};
    font-weight: bold;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  width: 315px;
  height: 108px;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 127.3%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  cursor: pointer;
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.content};
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 7px;
  }

  &:last-child {
    margin-top: 12px;
  }
`;

const ResetPassword = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  padding: 18px 0;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textlightgray};
`;

const Terms = styled.p`
  color: ${({ theme }) => theme.colors.termsgray};
  font-size: 13px;
  line-height: 155.3%;
  word-break: break-all;
`;

function SignIn() {
  const navigation = useNavigate();
  const onClickEmailLogIn = () => {
    navigation('/signin/member');
  };
  return (
    <Wrapper>
      <HeaderRectangle />
      <Main>
        <h1>오늘의 옷장 로그인</h1>
        <HeaderButton>
          <span>계정이 없으세요?</span>
          <span>회원가입</span>
        </HeaderButton>
        <ButtonContainer>
          <Button>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M17.282 7.356H8.956v3.45h4.792C13.302 13 11.434 14.26 8.956 14.26a5.27 5.27 0 0 1-5.28-5.28 5.27 5.27 0 0 1 5.28-5.28c1.258 0 2.396.448 3.29 1.179l2.6-2.6C13.26.9 11.23.048 8.956.048A8.908 8.908 0 0 0 .022 8.98a8.907 8.907 0 0 0 8.934 8.934c4.466 0 8.529-3.25 8.529-8.934 0-.528-.081-1.097-.203-1.625Z"
                />
              </svg>
            </div>
            구글로 로그인
          </Button>
          <Button onClick={onClickEmailLogIn}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M16 0H2C.897 0 0 .897 0 2v13h2V4l6.4 4.8a1.001 1.001 0 0 0 1.2 0L16 4v9H1.5v2H16c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2ZM9 6.75 2.666 2h12.668L9 6.75Z"
                />
              </svg>
            </div>
            이메일로 로그인
          </Button>
        </ButtonContainer>

        <ResetPassword>비밀번호 재설정</ResetPassword>
        <Terms>
          SNS로 로그인 및 회원가입 시 오늘의옷장의 이용약관과 개인정보 수집 및
          이용에 동의한 것으로 간주합니다.
        </Terms>
      </Main>
    </Wrapper>
  );
}

export default SignIn;
