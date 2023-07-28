import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCheckSVG } from '@svg/check.svg';
import { IConfirmVoteList } from 'types/Home/Confirm';

function ConfirmVoteList({ onClickFunc, pickValue, votes }: IConfirmVoteList) {
  return (
    <>
      {votes.map((vote) => (
        <ConfirmVoteListItem
          key={vote.voteTypeId}
          type="button"
          value={vote.order}
          onClick={onClickFunc}
          $isActive={pickValue === vote.order + ''}
        >
          <ConfirmCheckSVG />
          {vote.wording}
        </ConfirmVoteListItem>
      ))}
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
