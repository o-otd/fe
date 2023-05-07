import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import styled from 'styled-components';
import { bottomSheetTabs } from 'constant';
import { ReactComponent as SuggestionColorSvg } from '../../../styles/images/icons/suggestion-color.svg';
import { IFiltersProps } from 'types/Common';

const SuggestionLnb = styled(Swiper)`
  margin-top: 4px;
`;

const SuggestionSwiper = styled(SwiperSlide)`
  width: auto;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  background-color: ${({ theme }) => theme.colors.gray4};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

function Filters({ setIsFilterOpen }: IFiltersProps) {
  const onClickFilter = () => {
    setIsFilterOpen(true);
  };

  return (
    <SuggestionLnb spaceBetween={4} slidesPerView={'auto'}>
      <ul>
        {bottomSheetTabs.map((tab) =>
          tab.name === '컬러' ? (
            <SuggestionSwiper onClick={onClickFilter} key={tab.id}>
              <SuggestionColorSvg />
            </SuggestionSwiper>
          ) : (
            <SuggestionSwiper onClick={onClickFilter} key={tab.id}>
              {tab.name}
            </SuggestionSwiper>
          ),
        )}
      </ul>
    </SuggestionLnb>
  );
}

export default Filters;
