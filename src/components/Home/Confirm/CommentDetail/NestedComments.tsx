import React, { useState } from 'react';
import styled from 'styled-components';
import CommentsItem from './CommentsItem';
import { INestedCommentsProps } from 'types/Home/Confirm';

function NestedComments({
  nestedComments,
  onInputHandler,
  inputTextLength,
  onClickSubmit,
  commentContent,
}: INestedCommentsProps) {
  const [activeCommentId, setActiveCommentId] = useState<number>();
  const [activeModifyId, setActiveModifyId] = useState<number>();

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
                isActive={comment.id === activeCommentId}
                isActiveModify={comment.id === activeModifyId}
              />
            ))}
        </ul>
      </CommentsList>
      <CommentsForm>
        <div>
          <CommentsFormTextArea
            onClick={(event) => {
              event.stopPropagation();
            }}
            onChange={onInputHandler}
            maxLength={600}
            placeholder="댓글을 입력하세요"
            value={commentContent}
          ></CommentsFormTextArea>
          <CommentsFormSubmit
            onClick={(event) => onClickSubmit(event)}
            disabled={inputTextLength === 0}
          >
            댓글 남기기
          </CommentsFormSubmit>
        </div>
      </CommentsForm>
    </div>
  );
}

export default NestedComments;

const CommentsList = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const CommentsForm = styled.form`
  margin-top: 16px;

  & > div {
    display: flex;
  }
`;

const CommentsFormTextArea = styled.textarea`
  width: calc(100% - 86px);
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  resize: none;
  font-size: 14px;
  height: 34px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 14px;
  overflow-y: hidden;

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

const CommentsFormSubmit = styled.button`
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  font-weight: 600;
  font-size: 13px;
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.gray2};
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray5};
  }
`;
