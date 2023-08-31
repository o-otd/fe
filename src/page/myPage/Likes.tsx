import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageArrowLeftPNG from '@svg/arrow-left-07.png';
import MyPageDummyImage from '../../styles/images/mypage-dummy-image.png';

function Likes() {
  return (
    <>
      <MyPageHeader>
        <div>
          <Link to={'/mypage'}>
            <button>
              <img src={MyPageArrowLeftPNG} />
            </button>

            <h3>CNVXCX</h3>
          </Link>
        </div>

        <MyPageTab>
          <li>
            <button>모두(123)</button>
          </li>
          <li>
            <button>옷장(23)</button>
          </li>
          <li>
            <button>제품(34)</button>
          </li>
          <li>
            <button>컨펌(42)</button>
          </li>
          <li>
            <button>댓글(12)</button>
          </li>
        </MyPageTab>
      </MyPageHeader>

      <MyPageList>
        <ul>
          <li>
            <Link to={'/'}>
              <MyPageListImage>
                <img src={MyPageDummyImage} />
                <MyPageListCategory>옷장</MyPageListCategory>
              </MyPageListImage>
            </Link>
          </li>

          <li>
            <Link to={'/'}>
              <MyPageListImage>
                <img src={MyPageDummyImage} />
                <MyPageListCategory>옷장</MyPageListCategory>
              </MyPageListImage>
            </Link>
          </li>

          <li>
            <Link to={'/'}>
              <MyPageListImage>
                <img src={MyPageDummyImage} />
                <MyPageListCategory>옷장</MyPageListCategory>
              </MyPageListImage>
            </Link>
          </li>
        </ul>
      </MyPageList>
    </>
  );
}

export default Likes;

const MyPageHeader = styled.section`
  padding: 0 10px;
  margin-top: 24px;

  & a {
    display: flex;
  }

  & h3 {
    margin-left: 10px;
  }

  & button {
    width: 20px;
    height: 20px;

    & img {
      width: 100%;
    }
  }
`;

const MyPageTab = styled.ul`
  display: flex;
  margin-top: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    flex-shrink: 0;
    height: 34px;

    & + & {
      margin-left: 5px;
    }

    & button {
      width: 100%;
      height: 100%;
      padding: 16px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
`;

const MyPageList = styled.section`
  margin-top: 14px;

  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4px;

    & li {
      overflow: hidden;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};

      & a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const MyPageListImage = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const MyPageListCategory = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 11px;
  background-color: rgba(77, 77, 88, 0.4);
  color: #f2f2f7;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
`;
