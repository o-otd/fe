import React from 'react';
import styled from 'styled-components';

function TodayCardNoneButton() {
  return <CardItemsNone>오늘의 인기 옷장이 되어보세요.</CardItemsNone>;
}

export default TodayCardNoneButton;

const CardItemsNone = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.gray8};
  height: 91px;
  margin: 24px 16px 0 16px;
  font-size: 14px;
  font-weight: 500;
`;
