import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCheckSVG } from '@svg/check.svg';
import { IConfirmVoteResultListProps } from 'types/Home/Confirm';
import useGetVotePercentage from 'hooks/useGetVotePercentage';

function ConfirmVoteResultList({
  pickValue,
  isSubmit,
  isShowResult,
  goodCnt,
  badCnt,
}: IConfirmVoteResultListProps) {
  const [positiveVotePercentage, negativeVotePercentage] = useGetVotePercentage(
    goodCnt,
    badCnt,
  );

  useEffect(() => {
    if (isSubmit) {
      console.log('vote 정보 api get 요청');
      //  vote 정보 get api 요청 필요
    }
  }, [isSubmit]);

  return (
    <>
      <ConfirmVoteResultItem
        $isActive={pickValue === '0'}
        $positive={positiveVotePercentage}
        $isSelected={positiveVotePercentage > negativeVotePercentage}
      >
        {(!isShowResult || isSubmit) && <ConfirmCheckSVG />}
        입고 나가요
        <ConfirmVoteListResult>
          {positiveVotePercentage}%<span>{goodCnt}표</span>
        </ConfirmVoteListResult>
      </ConfirmVoteResultItem>
      <ConfirmVoteResultItem
        $isActive={pickValue === '1'}
        $negative={negativeVotePercentage}
        $isSelected={positiveVotePercentage < negativeVotePercentage}
      >
        {(!isShowResult || isSubmit) && <ConfirmCheckSVG />}
        다시 골라요
        <ConfirmVoteListResult>
          {negativeVotePercentage}%<span>{badCnt}표</span>
        </ConfirmVoteListResult>
      </ConfirmVoteResultItem>
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
  $positive?: number;
  $negative?: number;
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

    width: ${({ $positive, $negative }) =>
      $positive ? `${$positive}%` : `${$negative}%`};
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
