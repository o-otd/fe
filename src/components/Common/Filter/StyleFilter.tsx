import { styleCategory } from 'constant/bottomFilters';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setCurrentFilter, syncCurrentFilter } from 'redux/reducer/filter';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { IStyleFilterProps } from 'types/Common';

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

function StyleFilter({ filterIndex }: IStyleFilterProps) {
  const dispatch = useAppDispatch();
  const { currentFilter, filter } = useSelector(
    (state: RootState) => state.filter,
  );
  const onClickStyleFilter = (styleIndex: number) => {
    dispatch(
      setCurrentFilter({ filterIndex: filterIndex, filterValue: styleIndex }),
    );
  };

  useEffect(() => {
    if (filter[filterIndex].length > 0) {
      dispatch(
        syncCurrentFilter({
          filterIndex: filterIndex,
          filters: filter[filterIndex],
        }),
      );
    }
  }, [filter[filterIndex]]);

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
