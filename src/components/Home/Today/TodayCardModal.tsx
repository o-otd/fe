import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowRightGray9Svg } from '../../../styles/images/icons/arrow_right_gray9.svg';
import { ReactComponent as ModalCloseSvg } from '../../../styles/images/icons/modal_close.svg';
import { ReactComponent as LikesSvg } from '../../../styles/images/icons/likes.svg';
import { ITodayCardModalProps } from 'types/Home';

function TodayCardModal({ isOpen, setIsOpen }: ITodayCardModalProps) {
  const onClickCloseModal = () => {
    setIsOpen(false);
  };
  return (
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
  );
}

export default TodayCardModal;

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
