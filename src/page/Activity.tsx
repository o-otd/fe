import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SwiperSlide, Swiper } from 'swiper/react';
import { ReactComponent as SuggestionColorSvg } from '../styles/images/icons/suggestion-color.svg';

const LookTab = styled.div`
  overflow-x: scroll;
  margin: 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LookTabLists = styled.ul`
  display: flex;
  margin-bottom: 17px;
  margin: 0 20px;
`;

const LookTabList = styled(NavLink)`
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;

  & + a {
    margin-left: 37px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  }
`;

const SuggestionCategory = styled(Swiper)`
  & div {
    & div {
      width: 262px;
      height: 84px;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
      background-color: ${({ theme }) => theme.colors.gray4};
      font-size: 14px;
      font-weight: 600;
      padding: 11px 16px;
      display: flex;
      align-items: flex-end;
    }
  }
`;

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
`;

function Activity() {
  return (
    <main>
      <LookTab>
        <LookTabLists>
          <LookTabList to={'/'}>베스트룩 👍</LookTabList>
          <LookTabList to={'/temperatures'}>기온별 추천룩 🌤</LookTabList>
          <LookTabList to={'/tpo'}>TPO 추천룩 👔</LookTabList>
          <LookTabList to={'/activity'}>활동성 추천룩 🏄</LookTabList>
        </LookTabLists>
      </LookTab>

      <section>
        <SuggestionCategory spaceBetween={4} slidesPerView={'auto'}>
          <ul>
            <SwiperSlide>VACATION</SwiperSlide>
            <SwiperSlide>수상레져</SwiperSlide>
            <SwiperSlide>휴가</SwiperSlide>
            <SwiperSlide>수상레져</SwiperSlide>
          </ul>
        </SuggestionCategory>

        <SuggestionLnb spaceBetween={4} slidesPerView={'auto'}>
          <ul>
            <SuggestionSwiper>성별</SuggestionSwiper>
            <SuggestionSwiper>스타일</SuggestionSwiper>
            <SuggestionSwiper>연령대</SuggestionSwiper>
            <SuggestionSwiper>
              <SuggestionColorSvg />
            </SuggestionSwiper>
            <SuggestionSwiper>키</SuggestionSwiper>
            <SuggestionSwiper>몸무게</SuggestionSwiper>
          </ul>
        </SuggestionLnb>
      </section>
    </main>
  );
}

export default Activity;
