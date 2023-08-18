import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { LookTabs } from 'components/Common';
import { LookSlideCard, TodayCard, TodayCardModal } from 'components/Home';

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

        <LookTabs />

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

const CardSlide = styled.div`
  padding: 23px 0;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const LookListSwiper = styled.div`
  margin-top: 16px;
`;
