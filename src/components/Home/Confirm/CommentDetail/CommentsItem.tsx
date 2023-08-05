import React, { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreSVG } from '@svg/more.svg';
import { ICommentsItemProps } from 'types/Home/Confirm';
import CommentDropBox from './CommentDropBox';
import useOutsideClick from 'hooks/useOutsideClick';

function CommentsItem({
  commentData,
  onClickMore,
  isActive,
  setActiveCommentId,
}: ICommentsItemProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(ref, () => {
    if (isActive) setActiveCommentId(undefined);
  });

  return (
    <Wrapper>
      <CommentsItemWidth>
        <CommentsListInfo>
          <CommentsListTitle>{commentData.user.name}</CommentsListTitle>
          <CommentsListDate>{commentData.registered}</CommentsListDate>
        </CommentsListInfo>
        <CommentsListContents>{commentData.comment}</CommentsListContents>
      </CommentsItemWidth>

      <CommentsListMore
        ref={ref}
        onClick={(event) => onClickMore(event, commentData.id)}
      >
        <MoreSVG />
        {isActive && (
          <CommentDropBox
            myComment={commentData.myComment}
            commentId={commentData.id}
          />
        )}
      </CommentsListMore>
    </Wrapper>
  );
}

export default CommentsItem;

const Wrapper = styled.li`
  position: relative;

  & + & {
    margin-top: 12px;
  }
`;

const CommentsItemWidth = styled.div`
  width: calc(100% - 24px);
`;

const CommentsListInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsListTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const CommentsListDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
  margin-left: 8px;
`;

const CommentsListContents = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray8};
  font-weight: 400;
`;

const CommentsListMore = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
