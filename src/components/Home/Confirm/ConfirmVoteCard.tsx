import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmVoteSVG } from '@svg/confirm-vote-icon.svg';
import { ReactComponent as ConfirmCheckSVG } from '@svg/check.svg';

function ConfirmVoteCard() {
  const [pickValue, setPickValue] = useState<string | null>();
  const onClickPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLInputElement;
    setPickValue(eventTarget.value);
  };

  return (
    <ConfirmVote>
      <ConfirmVoteInfo>
        <ConfirmVoteSVG />
        <h5>PICK</h5>
        <ConfirmVoteData>
          7일 남음
          <span>2022.11.27 ~ 2022.12.04</span>
        </ConfirmVoteData>
      </ConfirmVoteInfo>
      <ConfirmVoteList
        type="button"
        value={0}
        onClick={onClickPick}
        $isActive={pickValue === '0'}
      >
        <ConfirmCheckSVG />
        입고 나가요
      </ConfirmVoteList>
      <ConfirmVoteList
        type="button"
        value={1}
        onClick={onClickPick}
        $isActive={pickValue === '1'}
      >
        <ConfirmCheckSVG />
        다시 골라요
      </ConfirmVoteList>

      <ConfirmVoteBtns>
        <ConfirmVoteSubmit type="submit" disabled={!Boolean(pickValue)}>
          투표하기
        </ConfirmVoteSubmit>
        <ConfirmVoteResult type="button">결과 확인</ConfirmVoteResult>
      </ConfirmVoteBtns>
    </ConfirmVote>
  );
}

export default ConfirmVoteCard;

const ConfirmVote = styled.form`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  margin-top: 4px;
`;

const ConfirmVoteInfo = styled.div`
  display: flex;
  align-items: center;

  & h5 {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
  }

  & svg {
    margin-right: 4px;
  }
`;

const ConfirmVoteData = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  margin-left: 12px;

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmVoteList = styled.button<{ $isActive: boolean }>`
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

const ConfirmVoteBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;

  & button + button {
    margin-left: 20px;
  }
`;

const ConfirmVoteSubmit = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
  cursor: initial;

  &:disabled {
    color: ${({ theme }) => theme.colors.gray5};
    cursor: not-allowed;
  }
`;

const ConfirmVoteResult = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
`;
