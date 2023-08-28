import React from 'react';
import styled from 'styled-components';
import dummyImage from '../../styles/images/dummy-profile.png';
import MyImageAddPNG from '@svg/mypage-image-add.png';
import MyPageArrowRightPNG from '@svg/arrow-right-07.png';
import { Link } from 'react-router-dom';

function MyPage() {
  return (
    <main>
      <MyPageCard>
        <MyPageImage>
          <img src={dummyImage} />
          <MyImageAdd htmlFor="mypage-image-add">
            <img src={MyImageAddPNG} />
          </MyImageAdd>
          <input type="file" id="mypage-image-add" />
        </MyPageImage>

        <div>
          <MyPageName>CNVXCX</MyPageName>
          <MyPageInfo>
            <MyPageInfoText>
              <b>234</b>팔로잉
            </MyPageInfoText>
            <MyPageInfoText>
              <b>14</b>팔로워
            </MyPageInfoText>
          </MyPageInfo>
        </div>
      </MyPageCard>

      <MyPageBoxLink>
        <Link to={'/'}>
          <h4>좋아요</h4>
          <span>123</span>
          <button>
            <img src={MyPageArrowRightPNG} />
          </button>
        </Link>
      </MyPageBoxLink>
    </main>
  );
}

const MyPageCard = styled.section`
  margin-top: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: ${({ theme }) => theme.colors.gray3};
  padding: 23px 16px;
  display: flex;
  align-items: center;
`;

const MyPageImage = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  background-color: yellow;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  & input {
    display: none;
  }

  & + div {
    margin-left: 12px;
  }
`;

const MyImageAdd = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  }
`;

const MyPageName = styled.h3`
  font-size: 21px;
  font-weight: 600;
`;

const MyPageInfo = styled.div`
  display: flex;
  margin-top: 4px;
`;

const MyPageInfoText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray7};
  font-weight: 400;

  & b {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    margin-right: 2px;
  }

  & + & {
    margin-left: 12px;
  }
`;

const MyPageBoxLink = styled.section`
  margin-top: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: ${({ theme }) => theme.colors.gray3};

  & a {
    display: flex;
    align-items: center;
    padding: 23px 16px;
    position: relative;
  }

  & h4 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 13px;
  }

  & span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
  }

  & button {
    position: absolute;
    right: 16px;
    width: 24px;
    height: 24px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default MyPage;
