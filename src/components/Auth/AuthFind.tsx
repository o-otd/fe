import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AuthFind() {
  return (
    <Wrapper>
      <Link to={'/reset'}>비밀번호 재설정</Link>
    </Wrapper>
  );
}

export default AuthFind;

const Wrapper = styled.div`
  padding: 18px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray7};
`;
