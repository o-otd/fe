import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmVoteIconSVG } from '../../../../styles/images/icons/confirm-vote-icon.svg';

function ConfirmWriteVote() {
  return (
    <WriteVote>
      <WriteVoteHeader>
        <WriteVoteTitle>
          <ConfirmVoteIconSVG />
          <div>PICK</div>
        </WriteVoteTitle>
        <WriteVoteDate>
          <WriteVoteDateRemain>7일 남음</WriteVoteDateRemain>
          <WriteVoteDatePeriod>2022.11.27 ~ 2022.12.04</WriteVoteDatePeriod>
        </WriteVoteDate>
      </WriteVoteHeader>
      <div>
        <WriteVoteInput>
          <input type="text" placeholder="선택 1" />
        </WriteVoteInput>
        <WriteVoteInput>
          <input type="text" placeholder="선택 2" />
        </WriteVoteInput>
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

const WriteVoteInput = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  margin-top: 12px;

  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 13px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
    font-size: 14px;
    font-weight: 700;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.main};
      outline: none;
    }
  }

  & + & {
    margin-top: 4px;
  }
`;
