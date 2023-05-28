import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RefreshSVG } from '../../../styles/images/icons/refresh.svg';
import useAuthRedirect from 'hooks/useAuthRedirect';

function ConfirmHeader() {
  const { redirectTo } = useAuthRedirect();
  const onClickAddConfirm = () => {
    redirectTo('/confirm/write');
  };

  return (
    <ConfirmUtil>
      <button>
        <RefreshSVG />
      </button>
      <div onClick={onClickAddConfirm}>글쓰기</div>
    </ConfirmUtil>
  );
}

export default ConfirmHeader;

const ConfirmUtil = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 25px;

  & button {
    display: block;
    height: 24px;
  }

  & div {
    cursor: pointer;
    margin-left: 24px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
  }
`;
