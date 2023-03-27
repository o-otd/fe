import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LikesSvg } from '../../styles/images/icons/likes.svg';
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

function LookSlideCard() {
  return (
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
  );
}
export default LookSlideCard;
