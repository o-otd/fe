import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RefreshSVG } from '../styles/images/icons/refresh.svg';

const ConfirmUtil = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 25px;

  & button {
    display: block;
    height: 24px;
  }

  & a {
    margin-left: 24px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
  }
`;

function Confirm() {
  return (
    <>
      <main>
        <ConfirmUtil>
          <button>
            <RefreshSVG />
          </button>
          <Link to={'/'}>글쓰기</Link>
        </ConfirmUtil>

        <section></section>
      </main>
    </>
  );
}

export default Confirm;
