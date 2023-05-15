import React from 'react';
import styled from 'styled-components';

const AuthFormSubmit = styled.div<{ error: any }>`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  & button {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    background-color: ${(props) =>
      props.error === true ? '#6A744D' : props.theme.colors.main};
  }
`;

interface IAuthSubmitButtonProps {
  isError: any;
  text: string;
}

function AuthSubmitButton({ isError, text }: IAuthSubmitButtonProps) {
  return (
    <AuthFormSubmit error={isError}>
      <button>{text}</button>
    </AuthFormSubmit>
  );
}

export default AuthSubmitButton;
