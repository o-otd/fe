import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useApi } from 'hooks/useApi';
import { getComments, registerComment } from 'api/confirm';
import { useParams } from 'react-router-dom';
import { LIST_SIZE } from 'constant';
import {
  CommentDetailHeader,
  CommentDetailInput,
  CommentItem,
} from 'components/Home/Confirm/CommentDetail';
import useTextInput from 'hooks/useTextInput';
import useAuthRedirect from 'hooks/useAuthRedirect';
import useCommentMutation from 'hooks/useCommentMutation';

function CommentDetail() {
  const { execute, error } = useApi(getComments);
  const { confirmId } = useParams();
  const [page, setPage] = useState(0);
  const { checkAuthAndProceed } = useAuthRedirect();
  const { execute: commnetExecute, error: commentError } =
    useApi(registerComment);

  const {
    inputTextLength,
    commentContent,
    onInputHandler,
    clearCommentContent,
  } = useTextInput();
  const { commentList, mutateComments, setCommentList } = useCommentMutation();

  const fetchComments = async () => {
    if (confirmId) {
      const response = await execute({
        targetId: confirmId,
        listSize: LIST_SIZE,
        page: page.toString(),
      });

      if (response) {
        setCommentList(response.data.datas);
      } else {
        return null;
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, [page]);

  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    checkAuthAndProceed(async () => {
      event.preventDefault();

      if (confirmId) {
        const response = await commnetExecute({
          confirmId: confirmId,
          content: commentContent,
        });

        if (!commentError && response) {
          clearCommentContent();
          mutateComments(response.data.comment);
        } else {
          alert(error);
        }
      }
    });
  };

  return (
    <main>
      <CommentDetailHeader totalComments={commentList.length} />

      <CommentDetailInput
        onClickSubmit={onClickSubmit}
        onInputHandler={onInputHandler}
        inputTextLength={inputTextLength}
        commentContent={commentContent}
      />

      {commentList.length > 0 && (
        <CommentList>
          <ul>
            {commentList.map((comment) => (
              <CommentItem commentData={comment} key={comment.id} />
            ))}
          </ul>
        </CommentList>
      )}
    </main>
  );
}

export default CommentDetail;

const CommentList = styled.section`
  padding: 22px 16px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;
