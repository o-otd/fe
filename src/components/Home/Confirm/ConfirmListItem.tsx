import React from 'react';
import styled from 'styled-components';
import ConfirmContentCard from './ConfirmContentCard';
import ConfirmVoteCard from './ConfirmVoteCard';
import ConfirmImageSlide from './ConfirmImageSlide';
import ConfirmComment from './ConfirmComment';
import { IConfirmListItemProps } from 'types/Home/Confirm';
import { getFormattedDate } from 'utils';

function ConfirmListItem({ confirmData }: IConfirmListItemProps) {
  return (
    <Wrapper>
      <ConfirmContentCard
        user={confirmData.user}
        startDate={getFormattedDate(confirmData.startDate)}
        endDate={getFormattedDate(confirmData.endDate)}
        content={confirmData.content}
        remains={confirmData.remains}
      />

      <ConfirmVoteCard
        confirmId={confirmData.id}
        startDate={getFormattedDate(confirmData.startDate)}
        endDate={getFormattedDate(confirmData.endDate)}
        remains={confirmData.remains}
        myVoting={confirmData.myVoting}
        votes={confirmData.votes}
      />

      <ConfirmImageSlide images={confirmData.images} />

      <ConfirmComment
        bestComment={confirmData.bestComment}
        confirmId={confirmData.id}
        totalComments={confirmData.totalComments}
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
