import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IAuthSelectButtonProps } from 'types/Auth';

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

function AuthSelectButton({ text, href, icon }: IAuthSelectButtonProps) {
  return (
    <AuthSocialList>
      <Link to={href}>
        {icon}
        {text}
      </Link>
    </AuthSocialList>
  );
}

export default AuthSelectButton;
