import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RefreshSVG } from '@svg/refresh.svg';
import useAuthRedirect from 'hooks/useAuthRedirect';
import { IConfirmHeaderProps } from 'types/Home/Confirm';

function ConfirmHeader({ onClickFunc }: IConfirmHeaderProps) {
  const { redirectTo } = useAuthRedirect();
  const onClickAddConfirm = () => {
    redirectTo('/confirm/write');
  };

  return (
    <ConfirmUtil>
      <button onClick={onClickFunc}>
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
