import { styleCategory } from 'constant';
import React from 'react';
import styled from 'styled-components';

const BottomSheetStyle = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 7px;
  }

  & li {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray9};
    padding: 6px 12px;
    background-color: ${({ theme }) => theme.colors.gray4};
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  }
`;

function StyleFilter() {
  return (
    <BottomSheetStyle>
      <ul>
        {styleCategory.map((style) => (
          <li key={style.id}>{style.name}</li>
        ))}
      </ul>
    </BottomSheetStyle>
  );
}

export default StyleFilter;
