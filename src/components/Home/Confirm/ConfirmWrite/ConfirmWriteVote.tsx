import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmVoteIconSVG } from '@svg/confirm-vote-icon.svg';
import { IConfirmWriteVoteProps } from 'types/Home/Confirm';
import WriteVoteInput from './WriteVoteInput';
import { daysRemaining } from 'utils';

function ConfirmWriteVote({
  firstVoteText,
  secondVoteText,
  setFirstVoteText,
  setSecondVoteText,
  startDate,
  endDate,
}: IConfirmWriteVoteProps) {
  return (
    <WriteVote>
      <WriteVoteHeader>
        <WriteVoteTitle>
          <ConfirmVoteIconSVG />
          <div>PICK</div>
        </WriteVoteTitle>
        {startDate && endDate && (
          <WriteVoteDate>
            <WriteVoteDateRemain>
              {daysRemaining(endDate)}일 남음
            </WriteVoteDateRemain>

            <WriteVoteDatePeriod>
              {startDate} ~ {endDate}
            </WriteVoteDatePeriod>
          </WriteVoteDate>
        )}
      </WriteVoteHeader>
      <div>
        <WriteVoteInput
          placeholder="선택 1"
          inputValue={firstVoteText}
          setInputValue={setFirstVoteText}
        />
        <WriteVoteInput
          placeholder="선택 2"
          inputValue={secondVoteText}
          setInputValue={setSecondVoteText}
        />
      </div>
    </WriteVote>
  );
}

export default ConfirmWriteVote;

const WriteVote = styled.section`
  padding: 22px 16px 20px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  margin-top: 4px;
`;

const WriteVoteHeader = styled.div`
  display: flex;
  align-items: center;
`;

const WriteVoteTitle = styled.div`
  display: flex;
  align-items: center;

  & div {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
    margin-left: 4px;
  }
`;

const WriteVoteDate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

const WriteVoteDateRemain = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  margin-right: 4px;
`;

const WriteVoteDatePeriod = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
`;
