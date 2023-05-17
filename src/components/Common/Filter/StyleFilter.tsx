import { styleCategory } from 'constant/bottomFilters';
import useSetCurrentFilters from 'hooks/useSetCurrentFilters';
import useSyncFilters from 'hooks/useSyncFilters';
import React from 'react';
import styled from 'styled-components';
import { IStyleFilterProps } from 'types/Common';

function StyleFilter({ filterIndex }: IStyleFilterProps) {
  useSyncFilters(filterIndex);

  const { currentFilter, setCurrentFilterValues } = useSetCurrentFilters();
  const onClickStyleFilter = (styleId: number) => {
    const id = String(styleId);
    setCurrentFilterValues(filterIndex, id);
  };

  return (
    <BottomSheetStyle>
      <ul>
        {styleCategory.map((style) => (
          <StyleBadge
            $isFilterChecked={currentFilter[filterIndex].includes(style.id)}
            onClick={() => onClickStyleFilter(style.id)}
            key={style.id}
          >
            {style.name}
          </StyleBadge>
        ))}
      </ul>
    </BottomSheetStyle>
  );
}

export default StyleFilter;

const BottomSheetStyle = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 7px;
  }
`;

const StyleBadge = styled.li<{ $isFilterChecked: boolean }>`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $isFilterChecked }) =>
    $isFilterChecked ? theme.colors.main : theme.colors.gray9};
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.gray4};
  border: 1px solid
    ${({ theme, $isFilterChecked }) =>
      $isFilterChecked ? theme.colors.main : theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
`;
