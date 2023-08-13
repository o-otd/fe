import React from 'react';
import styled from 'styled-components';
import { ICommentLineInputProps } from 'types/Home/Confirm';

function CommentLineInput({
  onChange,
  onSubmit,
  textLength,
  buttonText,
  placeholder,
  value,
}: ICommentLineInputProps) {
  return (
    <CommentsForm>
      <div>
        <CommentsFormTextArea
          onClick={(event) => {
            event.stopPropagation();
          }}
          onChange={onChange}
          maxLength={600}
          placeholder={placeholder}
          value={value}
        ></CommentsFormTextArea>
        <CommentsFormSubmit
          onClick={(event) => onSubmit(event)}
          disabled={textLength === 0}
        >
          {buttonText}
        </CommentsFormSubmit>
      </div>
    </CommentsForm>
  );
}

export default CommentLineInput;

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
