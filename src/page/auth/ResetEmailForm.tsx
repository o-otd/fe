import { ContentSubmitButton } from 'components/Common';
import HeaderRectangle from 'components/Common/Logo';
import React from 'react';
import styled from 'styled-components';

function ResetEmailForm() {
  return (
    <Wrapper>
      <HeaderRectangle />
      <MainForm>
        <h1>비밀번호 재설정</h1>
        <p>가입하신 이메일 주소로 비밀번호 재설정 메일을 보내드립니다.</p>
        <Input type="email" placeholder="이메일" />
        <ButtonContainer>
          <ContentSubmitButton text="이메일 보내기" />
        </ButtonContainer>
      </MainForm>
    </Wrapper>
  );
}

export default ResetEmailForm;

const Wrapper = styled.div`
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.mainbackground};
  padding-top: 47px;
  height: 100vh;
`;

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  & h1 {
    font-size: 24px;
    font-weight: bold;
    line-height: 127.3%;
    letter-spacing: -1px;
    margin-bottom: 22px;
  }

  & p {
    font-size: 14px;
    line-height: 140.3%;
    letter-spacing: -1px;
    word-break: keep-all;
    margin-bottom: 22px;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  height: 48px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid transparent;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.content};
  }

  ::placeholder {
    font-size: 15px;
    line-height: 127.3%;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.colors.termsgray};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 28px;
`;
