import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageArrowLeftPNG from '@svg/arrow-left-07.png';

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
