import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResetPassword = styled.div`
  padding: 18px 0;
  font-size: 14px;
  line-height: 127.3%;
  letter-spacing: -1px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textlightgray};
  & div {
    width: max-content;
  }
`;

function ResetPasswordButton() {
  const navigation = useNavigate();
  const onClick = () => {
    navigation('/signin/email');
  };
  return (
    <ResetPassword>
      <div onClick={onClick}>비밀번호 재설정</div>
    </ResetPassword>
  );
}

export default ResetPasswordButton;
