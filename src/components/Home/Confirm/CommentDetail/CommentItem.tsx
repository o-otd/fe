import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCommentLikeSVG } from '@svg/likes.svg';
import CommentsItem from './CommentsItem';
import {
  deleteCommentLike,
  getNestedComments,
  registerCommentLike,
} from 'api/confirm';
import { useApi } from 'hooks/useApi';
import { ICommentItemProps } from 'types/Home/Confirm';
import { LIST_SIZE } from 'constant';
import useAuthRedirect from 'hooks/useAuthRedirect';

function CommentItem({ commentData }: ICommentItemProps) {
  const [isLike, setIsLike] = useState(commentData.myLike);
  const [like, setLike] = useState(commentData.like);
  const { execute, error } = useApi(getNestedComments);
  const { execute: likeExecute, error: likeError } =
    useApi(registerCommentLike);
  const { execute: deleteLikeExecute, error: deleteLikeError } =
    useApi(deleteCommentLike);
  const { checkAuthAndProceed } = useAuthRedirect();
  const [page, setPage] = useState(0);
  const onClickComment = async () => {
    // 대댓글 get api 요청
    const response = await execute({
      targetId: commentData.id.toString(),
      listSize: LIST_SIZE,
      page: page.toString(),
    });

    console.log(response);
  };

  const onClickLike = () => {
    checkAuthAndProceed(async () => {
      if (isLike) {
        await deleteLikeExecute({
          commentId: commentData.id.toString(),
        });

        if (!deleteLikeError) {
          setIsLike(false);
          setLike((prev) => prev - 1);
        } else {
          alert(likeError);
        }
      } else {
        await likeExecute({
          commentId: commentData.id.toString(),
        });

        if (!likeError) {
          setIsLike(true);
          setLike((prev) => prev + 1);
        } else {
          alert(likeError);
        }
      }
    });
  };

  return (
    <Wrapper>
      <CommentListProfile
        src={commentData.user.avatar ? commentData.user.avatar : undefined}
      />
      <CommentListInfo>
        <CommentListNickName>{commentData.user.name}</CommentListNickName>
        <CommentListContent>{commentData.comment}</CommentListContent>

        <CommentListUtil>
          <CommentListComments>
            댓글 <span>13</span>
          </CommentListComments>
          <CommentListLikes $isMyLike={isLike}>
            <ConfirmCommentLikeSVG onClick={onClickLike} />
            <span>{like}</span>
          </CommentListLikes>
        </CommentListUtil>

        {/* <CommentsList>
          <ul>
            {[1, 2, 3, 4, 5].map((comments) => (
              <CommentsItem key={comments} />
            ))}
          </ul>
        </CommentsList> */}

        <CommentListDate>2022.11.27. 14:27</CommentListDate>
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

const CommentsList = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;
