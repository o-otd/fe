import React from 'react';
import styled from 'styled-components';

const LogoItem = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius7};
`;

function Logo() {
  return <LogoItem />;
}

export default Logo;
