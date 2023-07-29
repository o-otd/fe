import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCheckSVG } from '@svg/check.svg';
import { IConfirmVoteResultListProps } from 'types/Home/Confirm';
import useGetVotePercentage from 'hooks/useGetVotePercentage';

function ConfirmVoteResultList({
  pickValue,
  myVoting,
  votes,
}: IConfirmVoteResultListProps) {
  const percentageResult = useGetVotePercentage(votes[0].count, votes[1].count);

  return (
    <>
      {votes.map((vote) => (
        <ConfirmVoteResultItem
          key={vote.voteTypeId}
          $isActive={
            pickValue === vote.voteTypeId + '' || myVoting === vote.voteTypeId
          }
          $percentage={percentageResult[vote.order].percentage}
          $isSelected={percentageResult[vote.order].percentage > 50}
        >
          <ConfirmCheckSVG />
          {vote.wording}
          <ConfirmVoteListResult>
            {percentageResult[vote.order].percentage}%
            <span>{vote.count}표</span>
          </ConfirmVoteListResult>
        </ConfirmVoteResultItem>
      ))}
    </>
  );
}

export default ConfirmVoteResultList;

const ConfirmVoteListResult = styled.div`
  position: absolute;
  right: 16px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};

  & span {
    margin-left: 10px;
  }
`;

const ConfirmVoteResultItem = styled.div<{
  $isSelected: boolean;
  $isActive: boolean;
  $percentage: number;
}>`
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

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
    z-index: -1;

    width: ${({ $percentage }) => `${$percentage}%`};
    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? ' #87B207' : theme.colors.gray5};
  }

  & svg {
    & path {
      fill: ${({ $isActive, theme }) => ($isActive ? theme.colors.gray8 : '')};
    }
    display: ${({ $isActive }) => ($isActive ? '' : 'none')};
    width: ${({ $isActive }) => ($isActive ? '20px' : '')};
    height: ${({ $isActive }) => ($isActive ? '20px' : '')};
    margin-right: ${({ $isActive }) => ($isActive ? '10px' : '')};
  }
`;
