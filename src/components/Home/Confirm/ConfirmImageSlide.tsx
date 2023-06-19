import React from 'react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { IConfirmImageSlideProps } from 'types/Home/Confirm';

function ConfirmImageSlide({ images }: IConfirmImageSlideProps) {
  return (
    <ConfirmSlider>
      <CustomSwiper pagination modules={[Pagination]}>
        {images.map((image, index) => (
          <ConfirmSliderItem key={index}>
            <CoverImage
              src={`http://localhost/resources${image}`}
              alt="thumbnail"
            />
          </ConfirmSliderItem>
        ))}
      </CustomSwiper>
    </ConfirmSlider>
  );
}

export default ConfirmImageSlide;

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
