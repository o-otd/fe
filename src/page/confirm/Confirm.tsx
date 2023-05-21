import React from 'react';
import styled from 'styled-components';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dummyImage from '../../styles/images/dummy-profile.png';
import confirmImage from '../../styles/images/confirm-img-dummy.png';
import { ReactComponent as ConfirmVoteSVG } from '../../styles/images/icons/confirm-vote-icon.svg';
import ConfirmCommentLinkSVG from '../../styles/images/icons/confirm-comments-link.svg';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';

function Confirm() {
  return (
    <>
      <main>
        <ConfirmHeader />

        <section>
          <ul>
            <ConfirmListItem>
              <ConfirmCard>
                <ConfirmCardInfo>
                  <ConfirmCardProfile>
                    <CoverImage src={dummyImage} />
                  </ConfirmCardProfile>
                  <div>
                    <ConfirmCardNickName>CNVXCX</ConfirmCardNickName>
                    <ConfirmCardDate>
                      7일 남음 <span>2022.11.27 ~ 2022.12.04</span>
                    </ConfirmCardDate>
                  </div>
                </ConfirmCardInfo>
                <ConfirmCardContent>
                  이번 주말에 데이트 나가는데 어떤지 봐주세요. 키 178, 몸무게
                  72kg 평소에 무난하게 입습니다. 급해요 꼭 투표부탁. 댓글로 다른
                  스타일 추천도 받습니다! 부탁!!!!!!!!!!
                </ConfirmCardContent>
              </ConfirmCard>

              <ConfirmVote>
                <ConfirmVoteInfo>
                  <ConfirmVoteSVG />
                  <h5>PICK</h5>
                  <ConfirmVoteData>
                    7일 남음
                    <span>2022.11.27 ~ 2022.12.04</span>
                  </ConfirmVoteData>
                </ConfirmVoteInfo>
                <ConfirmVoteList type="button">입고 나가요</ConfirmVoteList>
                <ConfirmVoteList type="button">다시 골라요</ConfirmVoteList>

                <ConfirmVoteBtns>
                  <ConfirmVoteSubmit type="submit">투표하기</ConfirmVoteSubmit>
                  <ConfirmVoteResult type="button">결과 확인</ConfirmVoteResult>
                </ConfirmVoteBtns>
              </ConfirmVote>

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

            <ConfirmListItem>
              <ConfirmCard>
                <ConfirmCardInfo>
                  <ConfirmCardProfile>
                    <CoverImage src={dummyImage} />
                  </ConfirmCardProfile>
                  <div>
                    <ConfirmCardNickName>CNVXCX</ConfirmCardNickName>
                    <ConfirmCardDate>
                      7일 남음 <span>2022.11.27 ~ 2022.12.04</span>
                    </ConfirmCardDate>
                  </div>
                </ConfirmCardInfo>
                <ConfirmCardContent>
                  이번 주말에 데이트 나가는데 어떤지 봐주세요. 키 178, 몸무게
                  72kg 평소에 무난하게 입습니다. 급해요 꼭 투표부탁. 댓글로 다른
                  스타일 추천도 받습니다! 부탁!!!!!!!!!!
                </ConfirmCardContent>
              </ConfirmCard>

              <ConfirmVote>
                <ConfirmVoteInfo>
                  <ConfirmVoteSVG />
                  <h5>PICK</h5>
                  <ConfirmVoteData>
                    7일 남음
                    <span>2022.11.27 ~ 2022.12.04</span>
                  </ConfirmVoteData>
                </ConfirmVoteInfo>
                <ConfirmVoteList type="button">입고 나가요</ConfirmVoteList>
                <ConfirmVoteList type="button">다시 골라요</ConfirmVoteList>

                <ConfirmVoteBtns>
                  <ConfirmVoteSubmit type="submit">투표하기</ConfirmVoteSubmit>
                  <ConfirmVoteResult type="button">결과 확인</ConfirmVoteResult>
                </ConfirmVoteBtns>
              </ConfirmVote>

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

const ConfirmCard = styled.div`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const ConfirmCardInfo = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const ConfirmCardProfile = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  margin-right: 8px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ConfirmCardNickName = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const ConfirmCardDate = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmCardContent = styled.p`
  padding-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  line-height: 20px;
`;

const ConfirmVote = styled.form`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  margin-top: 4px;
`;

const ConfirmVoteInfo = styled.div`
  display: flex;
  align-items: center;

  & h5 {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
  }

  & svg {
    margin-right: 4px;
  }
`;

const ConfirmVoteData = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  margin-left: 12px;

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmVoteList = styled.button`
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  z-index: 3;

  /* active
  color: var(--gray2);
	background-color: var(--gray8); */
`;

const ConfirmVoteBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;

  & button + button {
    margin-left: 20px;
  }
`;

const ConfirmVoteSubmit = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
  cursor: initial;

  /* disabled 
  color: var(--gray5); 
	cursor: not-allowed; */
`;

const ConfirmVoteResult = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
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