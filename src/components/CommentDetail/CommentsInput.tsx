import React from 'react';
import styled from 'styled-components';

function CommentsInput() {
  return (
    <CommentsForm>
      <CommentsFormFlex>
        <CommentsFormTextArea placeholder="댓글을 입력하세요" />
        <CommentsFormSubmit>댓글 남기기</CommentsFormSubmit>
      </CommentsFormFlex>
    </CommentsForm>
  );
}

export default CommentsInput;

const CommentsForm = styled.form`
  margin-top: 16px;
`;

const CommentsFormFlex = styled.div`
  display: flex;
`;

const CommentsFormTextArea = styled.textarea`
  width: calc(100% - 86px);
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  resize: none;
  font-size: 14px;
  height: 35px;
  font-weight: 400;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.gray8};

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

  /* :disabled
  background-color: var(--gray5);  */
`;
