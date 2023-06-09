import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmWriteCloseSVG } from '../../../../styles/images/icons/confirm-comments-close.svg';
import { IConfirmWriteHeaderProps } from 'types/Home/Confirm';

function ConfirmWriteHeader({ onSubmit }: IConfirmWriteHeaderProps) {
  return (
    <WriteTop>
      <WriteTopClose>
        <ConfirmWriteCloseSVG />
      </WriteTopClose>
      <WriteTopTitle>컨펌 글쓰기</WriteTopTitle>
      <WriteTopSubmit onClick={(event) => onSubmit(event)}>
        글쓰기 작성 완료
      </WriteTopSubmit>
    </WriteTop>
  );
}

export default ConfirmWriteHeader;

const WriteTop = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.headerRadius30};
  padding: 0 16px;
`;

const WriteTopClose = styled.button`
  height: 24px;
`;

const WriteTopTitle = styled.div`
  margin-left: 12px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};
`;

const WriteTopSubmit = styled.button`
  margin-left: auto;
  color: #17171b;
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
