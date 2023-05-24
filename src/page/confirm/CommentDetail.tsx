import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCommentCloseSVG } from '../../styles/images/icons/confirm-comments-close.svg';

function CommentDetail() {
  return (
    <main>
      <CommentTop>
        <CommentTopClose>
          <ConfirmCommentCloseSVG />
        </CommentTopClose>
        <CommentTopTitle>
          댓글 <span>72</span>
        </CommentTopTitle>
      </CommentTop>

      <CommentForm>
        <form>
          <CommentTextArea placeholder="댓글을 입력하세요" />
          <CommentInputUtil>
            <span>0</span>/600
            <CommentFormSubmit>댓글 남기기</CommentFormSubmit>
          </CommentInputUtil>
        </form>
      </CommentForm>
    </main>
  );
}

export default CommentDetail;

const CommentTop = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.headerRadius30};
  padding: 0 16px;
`;

const CommentTopClose = styled.button`
  height: 24px;
`;

const CommentTopTitle = styled.div`
  margin-left: 12px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};

  & span {
    margin-left: 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const CommentForm = styled.section`
  margin-top: 4px;
  padding: 22px 16px 20px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;

const CommentTextArea = styled.textarea`
  display: block;
  padding: 16px;
  width: 100%;
  height: 103px;
  resize: none;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  background-color: ${({ theme }) => theme.colors.gray2};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 14px;

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const CommentInputUtil = styled.div`
  margin-top: 11px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray5};
`;

const CommentFormSubmit = styled.button`
  margin-left: 23px;
  background-color: ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  font-weight: 600;
  font-size: 14px;
  padding: 10px 12px;
  color: ${({ theme }) => theme.colors.gray2};

  /* disabled
  background-color: var(--gray5);  */
`;
