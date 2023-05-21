import React from 'react';
import styled from 'styled-components';

function TodayCardEditButton() {
  return (
    <CardHeaderEdit>
      <button>수정</button>
    </CardHeaderEdit>
  );
}

export default TodayCardEditButton;

const CardHeaderEdit = styled.li`
  background-color: ${({ theme }) => theme.colors.gray7};
  color: ${({ theme }) => theme.colors.gray1};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  width: 49px;
  height: 30px;

  & button {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 12px;
  }
`;
