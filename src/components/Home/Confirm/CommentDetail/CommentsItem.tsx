import React, { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreSVG } from '@svg/more.svg';
import { ICommentsItemProps } from 'types/Home/Confirm';
import CommentDropBox from './CommentDropBox';
import useOutsideClick from 'hooks/useOutsideClick';
import useTextInput from 'hooks/useTextInput';
import useAuthRedirect from 'hooks/useAuthRedirect';
import { useApi } from 'hooks/useApi';
import { modifyComment, registerComment } from 'api/confirm';
import { useParams } from 'react-router-dom';
import CommentLineInput from './CommentLineInput';

function CommentsItem({
  commentData,
  onClickMore,
  isActive,
  setActiveCommentId,
  setActiveModifyId,
  setActiveReplyId,
  isActiveModify,
  isActiveReply,
  mutateModifyComments,
}: ICommentsItemProps) {
  const { confirmId } = useParams();
  const {
    inputTextLength,
    commentContent,
    onInputHandler,
    setCommentContent,
    setInputTextLength,
  } = useTextInput();

  const {
    inputTextLength: replyInputTextLength,
    commentContent: repleyCommentContent,
    onInputHandler: repleyOnInputHandler,
    setCommentContent: setReplyCommentContent,
    setInputTextLength: setRepleyInputTextLength,
  } = useTextInput();

  const { checkAuthAndProceed } = useAuthRedirect();
  const { execute, error } = useApi(modifyComment);
  const { execute: registerExecute, error: registerError } =
    useApi(registerComment);

  const ref = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(ref, () => {
    if (isActive) setActiveCommentId(undefined);
  });

  const onClickModifyComment = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveCommentId(undefined);
    setActiveReplyId(undefined);
    setActiveModifyId(commentData.id);
    setCommentContent(commentData.comment);

    setInputTextLength(commentData.comment.length);
  };

  const onClickReplyComment = (event: React.MouseEvent) => {
    const initialContent = `@${commentData.user.name}  `;
    event.stopPropagation();
    setActiveReplyId(commentData.id);
    setActiveCommentId(undefined);
    setActiveModifyId(undefined);

    setReplyCommentContent(initialContent);
    setRepleyInputTextLength(initialContent.length - initialContent.length);
  };

  const onClickModify = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    checkAuthAndProceed(async () => {
      const response = await execute({
        commentId: commentData.id,
        content: commentContent,
      });

      if (!error && response) {
        mutateModifyComments(commentData.id, commentContent);
        setActiveModifyId(undefined);
      } else {
        alert(error);
      }
    });
  };

  const onClickReply = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (confirmId) {
      checkAuthAndProceed(async () => {
        const response = await registerExecute({
          confirmId: confirmId,
          content: repleyCommentContent,
          parentCommentId: commentData.id + '',
        });

        if (!registerError && response) {
          setActiveReplyId(undefined);
        } else {
          alert(registerError);
        }
      });
    }
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const initialContent = `@${commentData.user.name}  `;

    if (event.target.value.startsWith(initialContent)) {
      repleyOnInputHandler(event);
      setRepleyInputTextLength(
        event.target.value.length - initialContent.length,
      );
    }
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
            onClickReplyComment={onClickReplyComment}
          />
        )}
      </CommentsListMore>

      {isActiveModify && (
        <CommentLineInput
          placeholder="댓글을 입력하세요"
          value={commentContent}
          textLength={inputTextLength}
          onChange={onInputHandler}
          onSubmit={onClickModify}
          buttonText="수정 하기"
        />
      )}

      {isActiveReply && (
        <CommentLineInput
          placeholder="댓글을 입력하세요"
          value={repleyCommentContent}
          textLength={replyInputTextLength}
          onChange={handleTextareaChange}
          onSubmit={onClickReply}
          buttonText="댓글 남기기"
        />
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
