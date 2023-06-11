import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreSVG } from '@svg/more.svg';

function CommentsItem() {
  return (
    <Wrapper>
      <CommentsItemWidth>
        <CommentsListInfo>
          <CommentsListTitle>XCVXVV</CommentsListTitle>
          <CommentsListDate>2022.11.27. 14:27</CommentsListDate>
        </CommentsListInfo>
        <CommentsListContents>
          공감합니다...공감합니다...공감합니다...공감합니다...공감합니다...공감합니다...
        </CommentsListContents>
      </CommentsItemWidth>

      <CommentsListMore>
        <MoreSVG />
      </CommentsListMore>
    </Wrapper>
  );
}

export default CommentsItem;

const Wrapper = styled.li`
  position: relative;

  & + & {
    margin-top: 12px;
  }
`;

const CommentsItemWidth = styled.div`
  width: calc(100% - 24px);
`;

const CommentsListInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsListTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const CommentsListDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
  margin-left: 8px;
`;

const CommentsListContents = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray8};
  font-weight: 400;
`;

const CommentsListMore = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
