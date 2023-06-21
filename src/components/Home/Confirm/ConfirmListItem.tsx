import React from 'react';
import styled from 'styled-components';
import ConfirmContentCard from './ConfirmContentCard';
import ConfirmVoteCard from './ConfirmVoteCard';
import ConfirmImageSlide from './ConfirmImageSlide';
import ConfirmComment from './ConfirmComment';
import { IConfirmListItemProps } from 'types/Home/Confirm';

function ConfirmListItem({ confirmData }: IConfirmListItemProps) {
  return (
    <Wrapper>
      <ConfirmContentCard
        user={confirmData.user}
        startDate={confirmData.startDate}
        endDate={confirmData.endDate}
        content={confirmData.content}
        remains={confirmData.remains}
      />

      <ConfirmVoteCard
        confirmId={confirmData.id}
        goodCnt={confirmData.goodCnt}
        badCnt={confirmData.badCnt}
        startDate={confirmData.startDate}
        endDate={confirmData.endDate}
        remains={confirmData.remains}
      />

      <ConfirmImageSlide images={confirmData.images} />

      {confirmData.bestComment && (
        <ConfirmComment bestComment={confirmData.bestComment} />
      )}
    </Wrapper>
  );
}

export default ConfirmListItem;

const Wrapper = styled.li`
  & + & {
    margin-top: 24px;
  }
`;
