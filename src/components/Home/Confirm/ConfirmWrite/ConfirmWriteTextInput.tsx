import React from 'react';
import styled from 'styled-components';
import ConfirmWriteArrowBottomSVG from '@svg/confirm-write-arrow-bottom.svg';
import { ReactComponent as CalendarSVG } from '@svg/calendar.svg';
import { IConfirmWriteTextInputProps } from 'types/Home/Confirm';

function ConfirmWriteTextInput({
  text,
  setText,
  onClickDate,
  startDate,
  endDate,
}: IConfirmWriteTextInputProps) {
  const onChangeTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <WriteForm>
      <WriteFormHeader>
        <WriteFormProfile />

        <WriteFormInfo>
          <WriteFormNickName>CNVXCX</WriteFormNickName>

          <WriteFormDate>
            <CalendarSVG />
            <WriteFormInput>
              <input
                readOnly
                onClick={() => onClickDate('start')}
                type="text"
                value={startDate}
              />
              <span>~</span>
              <input
                readOnly
                onClick={() => onClickDate('end')}
                type="text"
                value={endDate}
              />
            </WriteFormInput>
          </WriteFormDate>
        </WriteFormInfo>
      </WriteFormHeader>
      <WriteFormTextArea
        maxLength={1500}
        value={text}
        onChange={onChangeTextInput}
        placeholder="텍스트를 입력하세요"
      />
    </WriteForm>
  );
}

export default ConfirmWriteTextInput;

const WriteForm = styled.section`
  padding: 22px 16px 20px 16px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;

const WriteFormHeader = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const WriteFormProfile = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray9};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
`;

const WriteFormInfo = styled.div`
  margin-left: 8px;
`;

const WriteFormNickName = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const WriteFormDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;

  & input {
    width: 86px;
    height: 24px;
    color: ${({ theme }) => theme.colors.gray1};
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    color: ${({ theme }) => theme.colors.gray3};
    padding: 8px 5px 5px 4px;
    background: url(${ConfirmWriteArrowBottomSVG}) no-repeat right / auto,
      ${({ theme }) => theme.colors.gray7};
  }

  & span {
    display: block;
    margin: 0 4px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const WriteFormInput = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: center;

  & input {
    display: flex;
    padding: 4px;
  }
`;

const WriteFormTextArea = styled.textarea`
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  background-color: transparent;
  width: 100%;
  height: 92px;
  padding: 16px;
  resize: none;
  font-size: 14px;
  font-weight: 400;
`;
