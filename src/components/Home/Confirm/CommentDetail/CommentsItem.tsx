import React, { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreSVG } from '@svg/more.svg';
import { ICommentsItemProps } from 'types/Home/Confirm';
import CommentDropBox from './CommentDropBox';
import useOutsideClick from 'hooks/useOutsideClick';
import useTextInput from 'hooks/useTextInput';
import useAuthRedirect from 'hooks/useAuthRedirect';
import { useApi } from 'hooks/useApi';
import { modifyComment } from 'api/confirm';

function CommentsItem({
  commentData,
  onClickMore,
  isActive,
  setActiveCommentId,
  setActiveModifyId,
  isActiveModify,
  mutateModifyComments,
}: ICommentsItemProps) {
  const {
    inputTextLength,
    commentContent,
    onInputHandler,
    clearCommentContent,
    setCommentContent,
    setInputTextLength,
  } = useTextInput();

  const { checkAuthAndProceed } = useAuthRedirect();
  const { execute, error } = useApi(modifyComment);

  const ref = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(ref, () => {
    if (isActive) setActiveCommentId(undefined);
  });

  const onClickModifyComment = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveCommentId(undefined);
    setActiveModifyId(commentData.id);
    setCommentContent(commentData.comment);
    setInputTextLength(commentData.comment.length);
  };

  const onClickModify = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    checkAuthAndProceed(async () => {
      const response = await execute({
        commentId: commentData.id,
        content: commentContent,
      });

      if (!error && response) {
        console.log(commentData.id, commentContent);
        mutateModifyComments(commentData.id, commentContent);
        setActiveModifyId(undefined);
      } else {
        alert(error);
      }
    });
  };

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
            onClickModifyComment={onClickModifyComment}
          />
        )}
      </CommentsListMore>

      {isActiveModify && (
        <CommentsForm
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
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
              onClick={(event) => onClickModify(event)}
              disabled={inputTextLength === 0}
            >
              수정 하기
            </CommentsFormSubmit>
          </div>
        </CommentsForm>
      )}
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
