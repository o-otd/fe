import { colorCategory } from 'constant/bottomFilters';
import useSetCurrentFilters from 'hooks/useSetCurrentFilters';
import useSyncFilters from 'hooks/useSyncFilters';
import React from 'react';
import styled from 'styled-components';
import { IColorFilterProps } from 'types/Common';

function ColorFilter({ filterIndex }: IColorFilterProps) {
  const { currentFilter, setCurrentColorFilterValues } = useSetCurrentFilters();

  useSyncFilters(filterIndex);
  const onClickColorFilter = (colorIndex: number) => {
    setCurrentColorFilterValues(filterIndex, colorIndex);
  };

  return (
    <BottomSheetColors>
      <ul>
        {colorCategory.map((color) => (
          <li onClick={() => onClickColorFilter(color.id)} key={color.id}>
            <ColorShape
              $isFilterChecked={Boolean(
                currentFilter[filterIndex].includes(color.id),
              )}
              $color={color.name}
            />
            <ColorName
              $isFilterChecked={Boolean(
                currentFilter[filterIndex].includes(color.id),
              )}
            >
              {color.name}
            </ColorName>
          </li>
        ))}
      </ul>
    </BottomSheetColors>
  );
}

export default ColorFilter;

const BottomSheetColors = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 43px;
    gap: 19px 22px;
  }

  & li {
    text-align: center;
    cursor: pointer;
  }
`;

const ColorShape = styled.div<{ $color: string; $isFilterChecked: boolean }>`
  width: 40px;
  height: 40px;
  border: 3px solid
    ${({ theme, $isFilterChecked }) =>
      $isFilterChecked ? theme.colors.main : theme.colors.gray7};
  border-radius: 50%;
  box-shadow: inset 1px 1px 11px #000000;
  background-color: ${({ $color }) => $color};
`;

const ColorName = styled.span<{ $isFilterChecked: boolean }>`
  font-size: 13px;
  color: ${({ theme, $isFilterChecked }) =>
    $isFilterChecked ? theme.colors.main : theme.colors.gray7};
  font-weight: 400;
  margin-top: 4px;
  display: block;
`;
