import React from 'react';
import { ReactComponent as ConfirmWriteCloseSVG } from '../../styles/images/icons/confirm-comments-close.svg';
import styled from 'styled-components';
import ConfirmWriteArrowBottomSVG from '../../styles/images/icons/confirm-write-arrow-bottom.svg';
import { ReactComponent as CalendarSVG } from '../../styles/images/icons/calendar.svg';

function ConfirmWrite() {
  return (
    <main>
      <WriteTop>
        <WriteTopClose>
          <ConfirmWriteCloseSVG />
        </WriteTopClose>
        <WriteTopTitle>컨펌 글쓰기</WriteTopTitle>
        <WriteTopSubmit>글쓰기 작성 완료</WriteTopSubmit>
      </WriteTop>

      <WriteForm>
        <WriteFormHeader>
          <WriteFormProfile />
          <WriteFormInfo>
            <WriteFormNickName>CNVXCX</WriteFormNickName>
            <WriteFormDate>
              <CalendarSVG />
              <WriteFormInput>
                <input type="text" value="2022.11.27" />
                <span>~</span>
                <input type="text" value="2022.12.04" />
              </WriteFormInput>
            </WriteFormDate>
          </WriteFormInfo>
        </WriteFormHeader>
        <WriteFormTextArea placeholder="텍스트를 입력하세요"></WriteFormTextArea>
      </WriteForm>
    </main>
  );
}

export default ConfirmWrite;

const WriteTop = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.headerRadius30};
  padding: 0 16px;
`;

const WriteTopClose = styled.button`
  height: 24px;
`;

const WriteTopTitle = styled.div`
  margin-left: 12px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};
`;

const WriteTopSubmit = styled.div`
  margin-left: auto;
  color: #17171b;
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

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
