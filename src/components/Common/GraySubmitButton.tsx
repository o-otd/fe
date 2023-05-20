import React from 'react';
import styled from 'styled-components';
import { IGraySubmitButtonProps } from 'types/Common';

function GraySubmitButton({ text }: IGraySubmitButtonProps) {
  return <Button>{text}</Button>;
}

export default GraySubmitButton;

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
  background-color: ${({ theme }) => theme.colors.ligthgray};
`;
