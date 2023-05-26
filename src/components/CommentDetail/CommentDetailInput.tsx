import React from 'react';
import styled from 'styled-components';

function CommentDetailInput() {
  return (
    <CommentForm>
      <form>
        <CommentTextArea placeholder="댓글을 입력하세요" />
        <CommentInputUtil>
          <span>0</span>/600
          <CommentFormSubmit>댓글 남기기</CommentFormSubmit>
        </CommentInputUtil>
      </form>
    </CommentForm>
  );
}

export default CommentDetailInput;

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

  &:focus {
    outline-color: ${({ theme }) => theme.colors.main};
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
