import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCommentLikeSVG } from '@svg/likes.svg';
import {
  deleteCommentLike,
  getNestedComments,
  registerComment,
  registerCommentLike,
} from 'api/confirm';
import { useApi } from 'hooks/useApi';
import { ICommentItemProps } from 'types/Home/Confirm';
import { LIST_SIZE } from 'constant';
import useAuthRedirect from 'hooks/useAuthRedirect';
import useLikeMutation from 'hooks/useLikeMutation';
import NestedComments from './NestedComments';
import useTextInput from 'hooks/useTextInput';
import { useParams } from 'react-router-dom';
import useCommentMutation from 'hooks/useCommentMutation';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function CommentItem({ commentData }: ICommentItemProps) {
  const { confirmId } = useParams();

  const [isOpenNestedComment, setIsOpenNestedComment] = useState(false);
  const {
    inputTextLength,
    commentContent,
    onInputHandler,
    clearCommentContent,
  } = useTextInput();

  const { isLike, like, mutateIsLike, mutateLike } = useLikeMutation(
    commentData.myLike,
    commentData.like,
  );
  const {
    commentList,
    mutateComments,
    setCommentList,
    mutateDeleteComments,
    mutateModifyComments,
  } = useCommentMutation();
  const { execute, error } = useApi(getNestedComments);
  const { execute: nestedCommentExecute, error: nestedCommentError } =
    useApi(registerComment);
  const { execute: likeExecute, error: likeError } =
    useApi(registerCommentLike);
  const { execute: deleteLikeExecute, error: deleteLikeError } =
    useApi(deleteCommentLike);
  const { checkAuthAndProceed } = useAuthRedirect();

  const { deleteCommentId } = useSelector((state: RootState) => state.confirm);
  const [page, setPage] = useState(0);

  const onClickComment = async () => {
    setIsOpenNestedComment((prev) => !prev);

    const response = await execute({
      targetId: commentData.id.toString(),
      listSize: LIST_SIZE,
      page: page.toString(),
    });
    if (!error && response) {
      setCommentList(response.data.datas);
    }
  };

  const onClickLike = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    checkAuthAndProceed(async () => {
      if (isLike) {
        await deleteLikeExecute({
          commentId: commentData.id.toString(),
        });

        if (!deleteLikeError) {
          mutateIsLike();
          mutateLike(-1);
        } else {
          alert(likeError);
        }
      } else {
        await likeExecute({
          commentId: commentData.id.toString(),
        });

        if (!likeError) {
          mutateIsLike();
          mutateLike(1);
        } else {
          alert(likeError);
        }
      }
    });
  };

  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    checkAuthAndProceed(async () => {
      if (confirmId) {
        const response = await nestedCommentExecute({
          confirmId: confirmId,
          content: commentContent,
          parentCommentId: commentData.id + '',
        });

        if (response && !nestedCommentError) {
          clearCommentContent();
          mutateComments(response.data.comment);
        }
      }
    });
  };

  useEffect(() => {
    if (deleteCommentId) {
      mutateDeleteComments(deleteCommentId);
    }
  }, [deleteCommentId]);

  return (
    <Wrapper onClick={onClickComment}>
      <CommentListProfile
        src={commentData.user.avatar ? commentData.user.avatar : undefined}
      />
      <CommentListInfo>
        <CommentListNickName>{commentData.user.name}</CommentListNickName>
        <CommentListContent>{commentData.comment}</CommentListContent>

        <CommentListUtil>
          <CommentListComments>
            댓글 <span>{commentData.nested}</span>
          </CommentListComments>
          <CommentListLikes $isMyLike={isLike}>
            <ConfirmCommentLikeSVG onClick={(event) => onClickLike(event)} />
            <span>{like}</span>
          </CommentListLikes>
        </CommentListUtil>

        {isOpenNestedComment && (
          <NestedComments
            nestedComments={commentList}
            onInputHandler={onInputHandler}
            inputTextLength={inputTextLength}
            onClickSubmit={onClickSubmit}
            commentContent={commentContent}
            mutateComments={mutateComments}
            mutateModifyComments={mutateModifyComments}
          />
        )}

        <CommentListDate>{commentData.registered}</CommentListDate>
      </CommentListInfo>
    </Wrapper>
  );
}

export default CommentItem;

const Wrapper = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  padding-bottom: 20px;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }
`;

const CommentListProfile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  background-color: ${({ theme }) => theme.colors.gray8};
`;

const CommentListInfo = styled.div`
  width: calc(100% - 40px);
  font-size: 14px;
  margin-left: 16px;
`;

const CommentListNickName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const CommentListContent = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};
  margin-top: 4px;
`;

const CommentListUtil = styled.div`
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-top: 12px;
  /* 댓글 눌렀을 때 8px 추가 해야함. */
  padding-bottom: 8px;
`;

const CommentListComments = styled.div`
  color: ${({ theme }) => theme.colors.white};

  & span {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.gray7};
  }
`;

const CommentListLikes = styled.button<{ $isMyLike: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
  & svg {
    & path {
      fill: ${({ theme, $isMyLike }) =>
        $isMyLike ? theme.colors.red2 : theme.colors.gray5};
    }
  }

  & span {
    margin-left: 4px;
  }
`;

const CommentListDate = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
`;
