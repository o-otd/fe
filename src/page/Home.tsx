import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BookMarkSvg } from '../styles/images/icons/bookmark.svg';
import { ReactComponent as LikesSvg } from '../styles/images/icons/likes.svg';
import { ReactComponent as FollowSvg } from '../styles/images/icons/follow.svg';
import { ReactComponent as ArrowRightGray9Svg } from '../styles/images/icons/arrow_right_gray9.svg';
import { ReactComponent as ModalCloseSvg } from '../styles/images/icons/modal_close.svg';

const Card = styled.section`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  height: 200px;
  padding: 23px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const CardHeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  border: 1px solid ${({ theme }) => theme.colors.gray7};
  background-color: ${({ theme }) => theme.colors.gray9};
`;

const CardHeaderInfo = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  & strong {
    font-size: 17px;
    font-weight: 600;
  }

  & span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 2px;
  }
`;

const CardHeaderUtil = styled.ul`
  display: flex;
  & li {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};

    & button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        & path {
          fill: ${({ theme }) => theme.colors.gray6};
        }
      }
    }
  }

  & li + li {
    margin-left: 8px;
  }
`;

const CardItems = styled.ul`
  margin: 24px 0 0 16px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & li + li {
    margin-left: 12px;
  }

  & li {
    & span {
      font-size: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray7};
    }

    & div {
      margin-top: 5px;
      width: 72px;
      height: 72px;
      background-color: ${({ theme }) => theme.colors.gray5};
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
    }
  }
`;

const CardItem = styled.li``;

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

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalBackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(12, 10, 10, 0.75);
`;

const ModalContent = styled.div`
  position: absolute;
  width: 318px;
  height: 437px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: rgba(98, 98, 108, 0.82);
  backdrop-filter: blur(5.5px);
`;

const ModalInner = styled.div`
  position: relative;
  padding: 24px 23px;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  & h4 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const ModalLikes = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 28px;
    height: 28px;

    & path {
      fill: ${({ theme }) => theme.colors.gray8};
    }
  }
`;

const ModalProduct = styled.div`
  position: relative;

  & span {
    font-size: 14px;
    font-weight: 500;
  }

  & > a {
    display: flex;
    align-items: center;
    margin-top: 5px;

    & p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

const ModalProductImage = styled.div`
  margin-top: 19px;
  width: 272px;
  height: 272px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  overflow: hidden;

  & div {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray8};
  }
`;

const ModalProductForm = styled.form`
  position: absolute;
  display: flex;
  bottom: 16px;
  right: 16px;

  & * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 25px;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(44, 44, 52, 0.54);
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
    font-size: 14px;
    font-weight: 500;
  }

  & button + button {
    margin-left: 12px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: calc(437px + 100px);
  left: 50%;
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  background-color: ${({ theme }) => theme.colors.gray4};
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    & path {
      stroke: ${({ theme }) => theme.colors.gray9};
    }
  }
`;

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalWrapper>
          <ModalBackGround />
          <ModalContent>
            <ModalInner>
              <ModalTop>
                <h4>Shoes</h4>
                <ModalLikes>
                  <LikesSvg />
                </ModalLikes>
              </ModalTop>
              <ModalProduct>
                <span>반스</span>
                <a href="#">
                  <p>코듀랴 Old School 올드스쿨</p>
                  <ArrowRightGray9Svg />
                </a>
                <ModalProductImage>
                  <div>
                    <div />
                    <ModalProductForm>
                      <button>수정</button>
                      <button>삭제</button>
                    </ModalProductForm>
                  </div>
                </ModalProductImage>
              </ModalProduct>
            </ModalInner>
          </ModalContent>
          <ModalClose onClick={onClickCloseModal}>
            <ModalCloseSvg />
          </ModalClose>
        </ModalWrapper>
      </Modal>

      <Card>
        <div>
          <div>
            <div>
              <CardHeader>
                <CardHeaderUser>
                  <CardHeaderProfile></CardHeaderProfile>
                  <CardHeaderInfo>
                    <strong>Anonymous</strong>
                    <span>11월 3일 옷장</span>
                  </CardHeaderInfo>
                </CardHeaderUser>
                <CardHeaderUtil>
                  <li>
                    <button>
                      <LikesSvg />
                    </button>
                  </li>
                  <li>
                    <button>
                      <BookMarkSvg />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FollowSvg />
                    </button>
                  </li>
                </CardHeaderUtil>
              </CardHeader>
              <CardItems>
                <CardItem>
                  <button type="button" onClick={onClickOpenModal}>
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button" onClick={onClickOpenModal}>
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button" onClick={onClickOpenModal}>
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button" onClick={onClickOpenModal}>
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button" onClick={onClickOpenModal}>
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
              </CardItems>
            </div>
          </div>
        </div>
      </Card>
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
