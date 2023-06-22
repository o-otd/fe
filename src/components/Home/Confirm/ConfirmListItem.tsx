import React from 'react';
import styled from 'styled-components';
import ConfirmContentCard from './ConfirmContentCard';
import ConfirmVoteCard from './ConfirmVoteCard';
import ConfirmImageSlide from './ConfirmImageSlide';
import ConfirmComment from './ConfirmComment';
import { IConfirmListItemProps } from 'types/Home/Confirm';
import useGetDate from 'hooks/useGetDate';

function ConfirmListItem({ confirmData }: IConfirmListItemProps) {
  const [startDate, endDate] = useGetDate(
    confirmData.startDate,
    confirmData.endDate,
  );
  return (
    <Wrapper>
      <ConfirmContentCard
        user={confirmData.user}
        startDate={startDate}
        endDate={endDate}
        content={confirmData.content}
        remains={confirmData.remains}
      />

      <ConfirmVoteCard
        confirmId={confirmData.id}
        goodCnt={confirmData.goodCnt}
        badCnt={confirmData.badCnt}
        startDate={startDate}
        endDate={endDate}
        remains={confirmData.remains}
        myVoting={confirmData.myVoting}
      />

      <ConfirmImageSlide images={confirmData.images} />

      <ConfirmComment
        bestComment={confirmData.bestComment}
        confirmId={confirmData.id}
      />
    </Wrapper>
  );
}

export default ConfirmListItem;

const Wrapper = styled.li`
  & + & {
    margin-top: 24px;
  }
`;
