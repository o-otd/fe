import React from 'react';
import styled from 'styled-components';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ConfirmWriteSliderSVG } from '../../styles/images/icons/confirm-write__slider.svg';
import { ReactComponent as ConfirmVoteIconSVG } from '../../styles/images/icons/confirm-vote-icon.svg';

import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWriteHeader';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWriteTextInput';

function ConfirmWrite() {
  return (
    <form>
      <ConfirmWriteHeader />

      <ConfirmWriteTextInput />

      <WriteVote>
        <WriteVoteHeader>
          <WriteVoteTitle>
            <ConfirmVoteIconSVG />
            <div>PICK</div>
          </WriteVoteTitle>
          <WriteVoteDate>
            <WriteVoteDateRemain>7일 남음</WriteVoteDateRemain>
            <WriteVoteDatePeriod>2022.11.27 ~ 2022.12.04</WriteVoteDatePeriod>
          </WriteVoteDate>
        </WriteVoteHeader>
        <div>
          <WriteVoteInput>
            <input type="text" placeholder="선택 1" />
          </WriteVoteInput>
          <WriteVoteInput>
            <input type="text" placeholder="선택 2" />
          </WriteVoteInput>
        </div>
      </WriteVote>

      <WriteSlider>
        <CustomSwiper pagination modules={[Pagination]} spaceBetween={10}>
          {[1, 2, 3, 4, 5].map((inputItem) => (
            <SwiperSlideItem key={inputItem}>
              <input type="file" id={String(inputItem)} />
              <label htmlFor={String(inputItem)}>
                <div>이미지를 등록하세요.</div>
                <ConfirmWriteSliderSVG />
              </label>
            </SwiperSlideItem>
          ))}
        </CustomSwiper>
      </WriteSlider>
    </form>
  );
}

export default ConfirmWrite;

const WriteVote = styled.section`
  padding: 22px 16px 20px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  margin-top: 4px;
`;

const WriteVoteHeader = styled.div`
  display: flex;
  align-items: center;
`;

const WriteVoteTitle = styled.div`
  display: flex;
  align-items: center;

  & div {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
    margin-left: 4px;
  }
`;

const WriteVoteDate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

const WriteVoteDateRemain = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  margin-right: 4px;
`;

const WriteVoteDatePeriod = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
`;

const WriteVoteInput = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  margin-top: 12px;

  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 13px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
    font-size: 14px;
    font-weight: 700;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.main};
      outline: none;
    }
  }

  & + & {
    margin-top: 4px;
  }
`;

const WriteSlider = styled.section`
  margin-top: 4px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  background-color: ${({ theme }) => theme.colors.gray1};
`;

const CustomSwiper = styled(Swiper)`
  .swiper-pagination {
    top: auto;
    bottom: 8px;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: rgba(77, 77, 88, 0.52);
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const SwiperSlideItem = styled(SwiperSlide)`
  width: 100%;
  height: 375px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};

  & input {
    display: none;
  }

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 22px 16px 20px 16px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    & div {
      font-size: 17px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray7};
      margin-bottom: 18px;
    }
  }
`;
