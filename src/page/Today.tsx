import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import TodayCardModal from 'components/Home/TodayCardModal';
import TodayCard from 'components/Home/TodayCard';
import 'swiper/css';
import 'swiper/css/navigation';
import LookSlideCard from 'components/Home/LookSlideCard';
import { NavLink } from 'react-router-dom';

const Card = styled.section`
  margin-top: 4px;
`;

const Look = styled.section`
  & > h2 {
    margin: 24px 20px 18px 20px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

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

const CardSlide = styled.div`
  padding: 23px 0;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const LookListSwiper = styled.div`
  margin-top: 16px;
`;

function Today() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <TodayCardModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Swiper spaceBetween={20}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index}>
            <Card>
              <div>
                <CardSlide>
                  <TodayCard setIsOpen={setIsOpen} />
                </CardSlide>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Look>
        <h2>오늘의 추천 look</h2>

        <LookTab>
          <LookTabLists>
            <LookTabList to={'/'}>베스트룩 👍</LookTabList>
            <LookTabList to={'/temperatures'}>기온별 추천룩 🌤</LookTabList>
            <LookTabList to={'/tpo'}>TPO 추천룩 👔</LookTabList>
            <LookTabList to={'/activity'}>활동성 추천룩 🏄</LookTabList>
          </LookTabLists>
        </LookTab>

        <LookListSwiper>
          <Swiper>
            {[1, 2, 3, 4].map((item, index) => (
              <SwiperSlide key={index}>
                <LookSlideCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </LookListSwiper>
      </Look>
    </>
  );
}

export default Today;
