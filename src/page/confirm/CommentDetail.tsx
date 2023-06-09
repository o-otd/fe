import React from 'react';
import styled from 'styled-components';
import CommentDetailHeader from 'components/Home/Confirm/CommentDetail/CommentDetailHeader';
import CommentDetailInput from 'components/Home/Confirm/CommentDetail/CommentDetailInput';
import CommentItem from 'components/Home/Confirm/CommentDetail/CommentItem';

function CommentDetail() {
  return (
    <main>
      <CommentDetailHeader />

      <CommentDetailInput />

      <CommentList>
        <ul>
          {[1, 2, 3, 4, 5].map((comment) => (
            <CommentItem targetId={comment} key={comment} />
          ))}
        </ul>
      </CommentList>
    </main>
  );
}

export default CommentDetail;

const CommentList = styled.section`
  padding: 22px 16px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;
