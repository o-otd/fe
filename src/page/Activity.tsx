import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SwiperSlide, Swiper } from 'swiper/react';
import { ReactComponent as SuggestionColorSvg } from '../styles/images/icons/suggestion-color.svg';
import { ReactComponent as SuggestionLinkSvg } from '../styles/images/icons/suggestion-link-btn.svg';
import { Link } from 'react-router-dom';

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

const Looks = styled.section`
  & h2 {
    font-size: 34px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    margin: 32px 0;
    margin-left: 16px;

    & strong {
      font-weight: 700;
    }
  }
`;

const LooksLists = styled.ul`
  display: grid;
  grid-template-columns: 185px 185px;
  grid-gap: 4px 4px;
`;

const LooksList = styled.li`
  width: 185px;
  height: 276px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: ${({ theme }) => theme.colors.gray5};
  overflow: hidden;
  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const LooksListText = styled.div`
  text-decoration: underline;
  font-size: 27px;
  font-weight: 800;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 33px;
`;

const LooksListLink = styled(Link)`
  display: flex;
  justify-content: center;

  & svg {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
  }
`;

const LookListHover = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  height: 100%;
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

      <Looks>
        <h2>
          <strong>LOOK</strong>’S
        </h2>
        <LooksLists>
          <LooksList>
            <LookListHover>
              <LooksListText>
                2022
                <br />
                자켓룩
                <br />
                너무 좋아
                <br />
                아주 좋아
              </LooksListText>
              <LooksListLink to={'/'}>
                <SuggestionLinkSvg />
              </LooksListLink>
            </LookListHover>
          </LooksList>
          <LooksList>
            <div></div>
          </LooksList>
          <LooksList>
            <div></div>
          </LooksList>
          <LooksList>
            <div></div>
          </LooksList>
          <LooksList>
            <div></div>
          </LooksList>
          <LooksList>
            <div></div>
          </LooksList>
        </LooksLists>
      </Looks>
    </main>
  );
}

export default Activity;
