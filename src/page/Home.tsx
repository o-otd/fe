import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import TodayCardModal from 'components/Home/TodayCardModal';
import TodayCard from 'components/Home/TodayCard';
import 'swiper/css';
import 'swiper/css/navigation';

const Card = styled.section`
  margin-top: 4px;
`;

const Look = styled.section`
  & > h2 {
    margin: 24px 20px 0 20px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const LookTabSwiper = styled.div`
  margin-bottom: 17px;
  margin: 0 20px;

  & ul {
    & li {
      width: auto;
      padding: 8px 0px;
      font-size: 14px;
      font-weight: 700;
    }
  }
`;

const CardSlide = styled.div`
  padding: 23px 0;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <TodayCardModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Swiper spaceBetween={20}>
        <SwiperSlide>
          <Card>
            <div>
              <CardSlide>
                <TodayCard setIsOpen={setIsOpen} />
              </CardSlide>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <div>
              <CardSlide>
                <TodayCard setIsOpen={setIsOpen} />
              </CardSlide>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>

      <Look>
        <h2>오늘의 추천 look</h2>

        <LookTabSwiper>
          <ul>
            <li>베스트룩 👍</li>
            <li>기온별 추천룩 🌤</li>
            <li>TPO 추천룩 👔</li>
            <li>활동성 추천룩 🏄</li>
          </ul>
        </LookTabSwiper>
      </Look>
    </>
  );
}

export default Home;
