import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import styled from 'styled-components';
import { ReactComponent as SuggestionColorSvg } from '../../../styles/images/icons/suggestion-color.svg';
import { IFiltersProps } from 'types/Common';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { bottomSheetTabs } from 'constant/bottomFilters';

function Filters({ setIsFilterOpen }: IFiltersProps) {
  const onClickFilter = () => {
    setIsFilterOpen(true);
  };

  const { filter } = useSelector((state: RootState) => state.filter);

  return (
    <>
      <SuggestionLnb spaceBetween={4} slidesPerView={'auto'}>
        <ul>
          {bottomSheetTabs.map((tab) =>
            tab.name === '컬러' ? (
              <SuggestionSwiper
                $isFilterChecked={Boolean(filter[tab.id].length)}
                onClick={onClickFilter}
                key={tab.id}
              >
                <SuggestionColorSvg />
              </SuggestionSwiper>
            ) : (
              <SuggestionSwiper
                $isFilterChecked={Boolean(filter[tab.id].length)}
                onClick={onClickFilter}
                key={tab.id}
              >
                {tab.name}
              </SuggestionSwiper>
            ),
          )}
        </ul>
      </SuggestionLnb>
    </>
  );
}

export default Filters;

const SuggestionLnb = styled(Swiper)`
  margin-top: 4px;
`;

const SuggestionSwiper = styled(SwiperSlide)<{ $isFilterChecked: boolean }>`
  width: auto;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  background-color: ${({ theme, $isFilterChecked }) =>
    $isFilterChecked ? theme.colors.main : theme.colors.gray4};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  font-size: 14px;
  font-weight: ${({ $isFilterChecked }) => ($isFilterChecked ? '700' : '600')};
  cursor: pointer;
  color: ${({ $isFilterChecked, theme }) =>
    $isFilterChecked ? theme.colors.gray1 : theme.colors.white};
`;
