import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useApi } from 'hooks/useApi';
import { getComments } from 'api/confirm';
import { useParams } from 'react-router-dom';
import { LIST_SIZE } from 'constant';
import { IComment } from 'types/Home/Confirm';
import {
  CommentDetailHeader,
  CommentDetailInput,
  CommentItem,
} from 'components/Home/Confirm/CommentDetail';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'redux/store';
import { resetCommentDone } from 'redux/reducer/confirm';

function CommentDetail() {
  const { execute, error } = useApi(getComments);
  const { confirmId } = useParams();
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState<IComment[]>([]);
  const dispatch = useAppDispatch();
  const { commentDone } = useSelector((state: RootState) => state.confirm);

  const fetchComments = async () => {
    if (commentDone) dispatch(resetCommentDone());
    if (confirmId) {
      const response = await execute({
        targetId: confirmId,
        listSize: LIST_SIZE,
        page: page.toString(),
      });

      if (response) {
        setComments(response.data.datas);
      } else {
        return null;
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, [commentDone]);

  return (
    <main>
      <CommentDetailHeader totalComments={comments.length} />

      <CommentDetailInput />

      {comments.length > 0 && (
        <CommentList>
          <ul>
            {comments.map((comment) => (
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
