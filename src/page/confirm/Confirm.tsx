import React from 'react';
import styled from 'styled-components';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import confirmImage from '../../styles/images/confirm-img-dummy.png';
import ConfirmCommentLinkSVG from '../../styles/images/icons/confirm-comments-link.svg';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';
import ConfirmContentCard from 'components/Home/Confirm/ConfirmContentCard';
import ConfirmVoteCard from 'components/Home/Confirm/ConfirmVoteCard';

function Confirm() {
  return (
    <>
      <main>
        <ConfirmHeader />

        <section>
          <ul>
            <ConfirmListItem>
              <ConfirmContentCard />

              <ConfirmVoteCard />

              <ConfirmSlider>
                <CustomSwiper pagination modules={[Pagination]}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <ConfirmSliderItem key={item}>
                      <CoverImage src={confirmImage} alt="thumbnail" />
                    </ConfirmSliderItem>
                  ))}
                </CustomSwiper>
              </ConfirmSlider>

              <ConfirmComments>
                <ConfirmCommentsInfo>
                  댓글 <span>72</span>
                </ConfirmCommentsInfo>
                <ConfirmCommentsList>
                  <ConfirmCommentsItem>
                    <ConfirmCommentsProfile />
                    <ConfirmCommentsContent>
                      패턴이 너무 튀어요.
                    </ConfirmCommentsContent>
                  </ConfirmCommentsItem>
                </ConfirmCommentsList>
              </ConfirmComments>
            </ConfirmListItem>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Confirm;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ConfirmSlider = styled.div`
  margin-top: 4px;
  position: relative;
`;

const ConfirmSliderItem = styled(SwiperSlide)`
  width: 375px;
  height: 375px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const CustomSwiper = styled(Swiper)`
  .swiper-pagination {
    top: auto;
    bottom: 8px;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const ConfirmListItem = styled.li`
  & + & {
    margin-top: 24px;
  }
`;

const ConfirmComments = styled.div`
  padding: 22px 16px;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const ConfirmCommentsInfo = styled.h5`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
    margin-left: 7px;
  }
`;

const ConfirmCommentsList = styled.ul`
  margin-top: 11px;
`;

const ConfirmCommentsItem = styled.li`
  display: flex;
  align-items: center;
`;

const ConfirmCommentsProfile = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  overflow: hidden;
`;

const ConfirmCommentsContent = styled.p`
  width: calc(100% - 40px);
  position: relative;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: url(${ConfirmCommentLinkSVG}) no-repeat center / cover;
    right: 0;
  }
`;
