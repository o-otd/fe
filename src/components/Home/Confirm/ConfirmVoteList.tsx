import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCheckSVG } from '@svg/check.svg';
import { IConfirmVoteList } from 'types/Home/Confirm';

function ConfirmVoteList({ onClickFunc, pickValue }: IConfirmVoteList) {
  return (
    <>
      <ConfirmVoteListItem
        type="button"
        value={0}
        onClick={onClickFunc}
        $isActive={pickValue === '0'}
      >
        <ConfirmCheckSVG />
        입고 나가요
      </ConfirmVoteListItem>
      <ConfirmVoteListItem
        type="button"
        value={1}
        onClick={onClickFunc}
        $isActive={pickValue === '1'}
      >
        <ConfirmCheckSVG />
        다시 골라요
      </ConfirmVoteListItem>
    </>
  );
}

export default ConfirmVoteList;

const ConfirmVoteListItem = styled.button<{ $isActive: boolean }>`
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  z-index: 3;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.gray2 : '')};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.gray8 : ''};

  & svg {
    display: ${({ $isActive }) => ($isActive ? '' : 'none')};
    width: ${({ $isActive }) => ($isActive ? '20px' : '')};
    height: ${({ $isActive }) => ($isActive ? '20px' : '')};
    margin-right: ${({ $isActive }) => ($isActive ? '10px' : '')};
  }
`;
