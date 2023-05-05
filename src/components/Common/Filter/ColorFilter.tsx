import { colorCategory } from 'constant';
import React from 'react';
import styled from 'styled-components';

const BottomSheetColors = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 43px;
    gap: 19px 22px;

    & li {
      text-align: center;
    }
  }
`;

const ColorShape = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.gray7};
  border-radius: 50%;
  box-shadow: inset 1px 1px 11px #000000;
  background-color: ${({ $color }) => $color};
`;

const ColorName = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray7};
  font-weight: 400;
  margin-top: 4px;
  display: block;
`;

function ColorFilter() {
  return (
    <BottomSheetColors>
      <ul>
        {colorCategory.map((color) => (
          <li key={color.id}>
            <ColorShape $color={color.name} />
            <ColorName>{color.name}</ColorName>
          </li>
        ))}
      </ul>
    </BottomSheetColors>
  );
}

export default ColorFilter;
