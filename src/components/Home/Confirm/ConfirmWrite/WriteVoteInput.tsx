import React from 'react';
import styled from 'styled-components';
import { IWriteVoteInputProps } from 'types/Home/Confirm';

function WriteVoteInput({
  inputValue,
  setInputValue,
  placeholder,
}: IWriteVoteInputProps) {
  return (
    <Wrapper>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default WriteVoteInput;

const Wrapper = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  margin-top: 12px;

  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 13px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
    font-size: 14px;
    font-weight: 700;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.main};
      outline: none;
    }
  }

  & + & {
    margin-top: 4px;
  }
`;
