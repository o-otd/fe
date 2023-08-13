import { deleteComment } from 'api/confirm';
import { useApi } from 'hooks/useApi';
import useAuthRedirect from 'hooks/useAuthRedirect';
import React from 'react';
import { setDeleteComment } from 'redux/reducer/confirm';
import { useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { ICommentDropBoxProps } from 'types/Home/Confirm';

function CommentDropBox({
  myComment,
  commentId,
  onClickModifyComment,
  onClickReplyComment,
}: ICommentDropBoxProps) {
  const dispatch = useAppDispatch();
  const { execute, error } = useApi(deleteComment);
  const { checkAuthAndProceed } = useAuthRedirect();

  const onClickDeleteComment = () => {
    checkAuthAndProceed(async () => {
      if (commentId) {
        const response = await execute({
          commentId: commentId,
        });
        if (response) {
          if (response.ok) {
            dispatch(setDeleteComment(commentId));
          } else {
            alert(response.error);
          }
        } else {
          alert(error);
        }
      }
    });
  };

  return (
    <CommentsMoreList>
      {myComment ? (
        <>
          <CommentsMoreItem onClick={(event) => onClickModifyComment(event)}>
            수정
          </CommentsMoreItem>
          <CommentsMoreItemDelete onClick={onClickDeleteComment}>
            삭제
          </CommentsMoreItemDelete>
        </>
      ) : (
        <CommentsMoreItem onClick={onClickReplyComment}>
          답댓글
        </CommentsMoreItem>
      )}
    </CommentsMoreList>
  );
}

export default CommentDropBox;

const CommentsMoreList = styled.ul`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 0;
  width: 81px;
  z-index: 30;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius5};
`;

const CommentsMoreItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 500;
  font-size: 13px;
`;

const CommentsMoreItemDelete = styled(CommentsMoreItem)`
  color: ${({ theme }) => theme.colors.tint1};
`;
