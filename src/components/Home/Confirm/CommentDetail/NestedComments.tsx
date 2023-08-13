import React, { useState } from 'react';
import styled from 'styled-components';
import CommentsItem from './CommentsItem';
import { INestedCommentsProps } from 'types/Home/Confirm';
import CommentLineInput from './CommentLineInput';

function NestedComments({
  nestedComments,
  onInputHandler,
  inputTextLength,
  onClickSubmit,
  commentContent,
  mutateModifyComments,
}: INestedCommentsProps) {
  const [activeCommentId, setActiveCommentId] = useState<number>();
  const [activeModifyId, setActiveModifyId] = useState<number>();
  const [activeReplyId, setActiveReplyId] = useState<number>();

  const onClickMore = (
    event: React.MouseEvent<HTMLButtonElement>,
    commentId: number,
  ) => {
    event.stopPropagation();
    setActiveCommentId(commentId);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <CommentsList>
        <ul>
          {nestedComments &&
            nestedComments.map((comment) => (
              <CommentsItem
                key={comment.id}
                commentData={comment}
                onClickMore={onClickMore}
                setActiveCommentId={setActiveCommentId}
                setActiveModifyId={setActiveModifyId}
                setActiveReplyId={setActiveReplyId}
                isActive={comment.id === activeCommentId}
                isActiveModify={comment.id === activeModifyId}
                isActiveReply={comment.id === activeReplyId}
                mutateModifyComments={mutateModifyComments}
              />
            ))}
        </ul>
      </CommentsList>

      <CommentLineInput
        textLength={inputTextLength}
        placeholder="댓글을 입력하세요"
        value={commentContent}
        onChange={onInputHandler}
        onSubmit={onClickSubmit}
        buttonText="댓글 남기기"
      />
    </div>
  );
}

export default NestedComments;

const CommentsList = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;
