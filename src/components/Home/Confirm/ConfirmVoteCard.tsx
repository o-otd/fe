import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmVoteSVG } from '@svg/confirm-vote-icon.svg';
import ConfirmVoteList from './ConfirmVoteList';
import ConfirmVoteResultList from './ConfirmVoteResultList';
import { IConfirmVoteCardProps } from 'types/Home/Confirm';
import useAuthRedirect from 'hooks/useAuthRedirect';
import { useApi } from 'hooks/useApi';
import { registerVote } from 'api/confirm';

function ConfirmVoteCard({
  goodCnt,
  badCnt,
  remains,
  startDate,
  endDate,
  confirmId,
  myVoting,
}: IConfirmVoteCardProps) {
  const { execute, error } = useApi(registerVote);
  const { checkAuthAndProceed } = useAuthRedirect();
  const [isShowResult, setIsShowResult] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [pickValue, setPickValue] = useState<string | undefined>();

  const onClickPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLInputElement;
    setPickValue(eventTarget.value);
  };

  const onClickResultToggle = () => {
    setIsShowResult((prev) => !prev);
  };

  const onClickVoteSubmit = () => {
    checkAuthAndProceed(async () => {
      if (pickValue) {
        const response = await execute({
          confirmId: confirmId,
          voteType: parseInt(pickValue) === 0 ? 'good' : 'bad',
        });

        if (!response.ok) {
          alert(error);
        } else {
          setIsShowResult(true);
          setIsSubmit(true);
        }
      }
    });
  };

  return (
    <ConfirmVote>
      <ConfirmVoteInfo>
        <ConfirmVoteSVG />
        <h5>PICK</h5>
        <ConfirmVoteData>
          {remains}일 남음
          <span>
            {startDate} ~ {endDate}
          </span>
        </ConfirmVoteData>
      </ConfirmVoteInfo>

      {isShowResult || myVoting ? (
        <ConfirmVoteResultList
          pickValue={pickValue}
          isSubmit={isSubmit}
          goodCnt={goodCnt}
          badCnt={badCnt}
          myVoting={myVoting}
        />
      ) : (
        <ConfirmVoteList onClickFunc={onClickPick} pickValue={pickValue} />
      )}

      {!isSubmit && !myVoting && (
        <ConfirmVoteBtns>
          <ConfirmVoteSubmit
            type="button"
            disabled={!Boolean(pickValue) || isShowResult}
            onClick={onClickVoteSubmit}
          >
            투표하기
          </ConfirmVoteSubmit>
          <ConfirmVoteResult type="button" onClick={onClickResultToggle}>
            {isShowResult ? '돌아가기' : '결과확인'}
          </ConfirmVoteResult>
        </ConfirmVoteBtns>
      )}
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
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors.gray5};
    cursor: not-allowed;
  }
`;

const ConfirmVoteResult = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
`;
