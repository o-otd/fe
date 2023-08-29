import React from 'react';
import { Link } from 'react-router-dom';
import MyPageArrowLeftPNG from '@svg/arrow-left-07.png';
import styled from 'styled-components';

function Follow() {
  return (
    <main>
      <MyPageHeader>
        <div>
          <Link to={'/'}>
            <button>
              <img src={MyPageArrowLeftPNG} />
            </button>

            <h3>CNVXCX</h3>
          </Link>
        </div>
      </MyPageHeader>
    </main>
  );
}

export default Follow;

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
