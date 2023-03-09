import HeaderRectangle from 'components/SignIn/HeaderRectangle';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.mainbackground};
  padding-top: 47px;
  height: 100vh;
`;

const MainForm = styled.div`
  & h1 {
    font-size: 24px;
    line-height: 127.3%;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    width: 100%;
    height: 48px;
    border-radius: 15px;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray};
    padding: 12px 16px;
    border: 1px solid transparent;
    :focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.content};
    }
    :last-child {
      margin-top: 12px;
    }

    ::placeholder {
      font-size: 15px;
      line-height: 127.3%;
      letter-spacing: -1px;
      color: ${({ theme }) => theme.colors.termsgray};
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px 0;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 15px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.mainbackground};
  font-weight: bold;
  line-height: 127.3%;
  letter-spacing: -1px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.content};
  &:last-child {
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.ligthgray};
  }
`;

const ResetPassword = styled.div`
  padding: 18px 0;
  font-size: 14px;
  line-height: 127.3%;
  letter-spacing: -1px;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.textlightgray};
`;

function Member() {
  return (
    <Wrapper>
      <HeaderRectangle />
      <MainForm>
        <h1>이메일로 로그인</h1>
        <InputContainer>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
        </InputContainer>
        <ButtonContainer>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </ButtonContainer>
        <ResetPassword>비밀번호 재설정</ResetPassword>
      </MainForm>
    </Wrapper>
  );
}

export default Member;
