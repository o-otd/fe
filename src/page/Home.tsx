import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import TodayCardModal from 'components/Home/TodayCardModal';
import TodayCard from 'components/Home/TodayCard';
import { ReactComponent as LikesSvg } from '../styles/images/icons/likes.svg';
import 'swiper/css';
import 'swiper/css/navigation';

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

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LookTabLists = styled.ul`
  display: flex;
  margin-bottom: 17px;
  margin: 0 20px;
`;

const LookTabList = styled.li`
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;

  & + li {
    margin-left: 37px;
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

const LookListHover = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: rgba(203, 255, 46, 0.78);
  color: ${({ theme }) => theme.colors.gray1};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & span {
    font-size: 45px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const LookSlide = styled.div`
  width: 100%;
  height: 360px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  overflow: hidden;
  padding: 22px 20px;
  position: relative;

  &:hover ${LookListHover} {
    display: flex;
  }
`;

const LookListInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LookCategory = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  color: ${({ theme }) => theme.colors.gray1};
`;

const LookCategoryMain = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const LookCategorySub = styled.div`
  padding: 6px 14px;
  background-color: ${({ theme }) => theme.colors.gray9};
  font-size: 14px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  margin-left: 14px;
`;

const LookLikes = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const UtilIconLikes = styled.button`
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  & svg {
    width: 28px;
    height: 28px;
    & path {
      fill: ${({ theme }) => theme.colors.gray8};
    }
  }
`;

const LookImageWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 286px;
  height: 261px;
`;

const LookImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
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

        <LookTab>
          <LookTabLists>
            <LookTabList>베스트룩 👍</LookTabList>
            <LookTabList>기온별 추천룩 🌤</LookTabList>
            <LookTabList>TPO 추천룩 👔</LookTabList>
            <LookTabList>활동성 추천룩 🏄</LookTabList>
          </LookTabLists>
        </LookTab>
        <LookListSwiper>
          <div>
            <LookSlide>
              <LookListInner>
                <LookCategory>
                  <LookCategoryMain>top</LookCategoryMain>
                  <LookCategorySub>반소매셔츠</LookCategorySub>
                </LookCategory>

                <LookLikes>
                  <UtilIconLikes>
                    <LikesSvg />
                  </UtilIconLikes>
                </LookLikes>

                <LookImageWrap>
                  <LookImage />
                </LookImageWrap>
              </LookListInner>
              <LookListHover>
                <span>KIIMUIR</span>
                <span>투턱 버뮤다</span>
                <span>애드 데님 쇼츠</span>
              </LookListHover>
            </LookSlide>
          </div>
        </LookListSwiper>
      </Look>
    </>
  );
}

export default Home;
