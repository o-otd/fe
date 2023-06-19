import React from 'react';
import styled from 'styled-components';
import ConfirmCommentLinkSVG from '@svg/confirm-comments-link.svg';
import useDetailNavigation from 'hooks/useDetailNavigation';
import { IConfirmCommentProps } from 'types/Home/Confirm';

function ConfirmComment({ bestComment }: IConfirmCommentProps) {
  const { detailNavigation } = useDetailNavigation('comment', 1);
  const onClickComment = () => {
    detailNavigation();
  };

  return (
    <ConfirmComments onClick={onClickComment}>
      <ConfirmCommentsInfo>
        댓글 <span>72</span>
      </ConfirmCommentsInfo>

      <ConfirmCommentsList>
        <ConfirmCommentsItem>
          <ConfirmCommentsProfile
            src={bestComment.user.avatar ? bestComment.user.avatar : undefined}
          />
          <ConfirmCommentsContent>{bestComment.comment}</ConfirmCommentsContent>
        </ConfirmCommentsItem>
      </ConfirmCommentsList>
    </ConfirmComments>
  );
}

export default ConfirmComment;

const ConfirmComments = styled.div`
  padding: 22px 16px;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  cursor: pointer;
`;

const ConfirmCommentsInfo = styled.h5`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
    margin-left: 7px;
  }
`;

const ConfirmCommentsList = styled.ul`
  margin-top: 11px;
`;

const ConfirmCommentsItem = styled.li`
  display: flex;
  align-items: center;
`;

const ConfirmCommentsProfile = styled.img`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  overflow: hidden;
`;

const ConfirmCommentsContent = styled.p`
  width: calc(100% - 40px);
  position: relative;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: url(${ConfirmCommentLinkSVG}) no-repeat center / cover;
    right: 0;
  }
`;
