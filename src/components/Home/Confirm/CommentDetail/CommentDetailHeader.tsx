import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCommentCloseSVG } from '../../../../styles/images/icons/confirm-comments-close.svg';
import useCloseNavigation from 'hooks/useCloseNavigation';

function CommentDetailHeader() {
  const closeNavigation = useCloseNavigation();
  const onClickClose = () => {
    closeNavigation();
  };
  return (
    <CommentTop>
      <CommentTopClose onClick={onClickClose}>
        <ConfirmCommentCloseSVG />
      </CommentTopClose>
      <CommentTopTitle>
        댓글 <span>72</span>
      </CommentTopTitle>
    </CommentTop>
  );
}

export default CommentDetailHeader;

const CommentTop = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  height: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.headerRadius30};
  padding: 0 16px;
`;

const CommentTopClose = styled.button`
  height: 24px;
`;

const CommentTopTitle = styled.div`
  margin-left: 12px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};

  & span {
    margin-left: 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;
