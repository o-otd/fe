import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.ligthgray};
  margin: 25px 0;
`;

function HeaderRectangle() {
  return <Rectangle />;
}

export default HeaderRectangle;
