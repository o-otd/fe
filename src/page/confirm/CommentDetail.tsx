import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ConfirmCommentLikeSVG } from '../../styles/images/icons/likes.svg';
import { ReactComponent as MoreSVG } from '../../styles/images/icons/more.svg';
import CommentDetailHeader from 'components/CommentDetail/CommentDetailHeader';

function CommentDetail() {
  return (
    <main>
      <CommentDetailHeader />

      <CommentForm>
        <form>
          <CommentTextArea placeholder="댓글을 입력하세요" />
          <CommentInputUtil>
            <span>0</span>/600
            <CommentFormSubmit>댓글 남기기</CommentFormSubmit>
          </CommentInputUtil>
        </form>
      </CommentForm>

      <CommentList>
        <ul>
          <CommentItem>
            <CommentListProfile />
            <CommentListInfo>
              <CommentListNickName>닉네임</CommentListNickName>
              <CommentListContent>패턴이 너무 튀어요.</CommentListContent>

              <CommentListUtil>
                <CommentListComments>
                  댓글 <span>13</span>
                </CommentListComments>
                <CommentListLikes>
                  <ConfirmCommentLikeSVG />
                  <span>124</span>
                </CommentListLikes>
              </CommentListUtil>

              <CommentsList>
                <ul>
                  <Commentsitem>
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
                  </Commentsitem>
                </ul>

                <CommentsForm>
                  <CommentsFormFlex>
                    <CommentsFormTextArea placeholder="댓글을 입력하세요" />
                    <CommentsFormSubmit>댓글 남기기</CommentsFormSubmit>
                  </CommentsFormFlex>
                </CommentsForm>
              </CommentsList>

              <CommentListDate>2022.11.27. 14:27</CommentListDate>
            </CommentListInfo>
          </CommentItem>
        </ul>
      </CommentList>
    </main>
  );
}

export default CommentDetail;

const CommentForm = styled.section`
  margin-top: 4px;
  padding: 22px 16px 20px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;

const CommentTextArea = styled.textarea`
  display: block;
  padding: 16px;
  width: 100%;
  height: 103px;
  resize: none;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  background-color: ${({ theme }) => theme.colors.gray2};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 14px;

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const CommentInputUtil = styled.div`
  margin-top: 11px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray5};
`;

const CommentFormSubmit = styled.button`
  margin-left: 23px;
  background-color: ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  font-weight: 600;
  font-size: 14px;
  padding: 10px 12px;
  color: ${({ theme }) => theme.colors.gray2};

  /* disabled
  background-color: var(--gray5);  */
`;

const CommentList = styled.section`
  padding: 22px 16px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
`;

const CommentItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  padding-bottom: 20px;

  & + & {
    margin-top: 16px;
  }
`;

const CommentListProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  background-color: ${({ theme }) => theme.colors.gray8};
`;

const CommentListInfo = styled.div`
  width: calc(100% - 40px);
  font-size: 14px;
  margin-left: 16px;
`;

const CommentListNickName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const CommentListContent = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8};
  margin-top: 4px;
`;

const CommentListUtil = styled.div`
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-top: 12px;
  /* 댓글 눌렀을 때 8px 추가 해야함. */
  padding-bottom: 8px;
`;

const CommentListComments = styled.div`
  color: ${({ theme }) => theme.colors.white};

  & span {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.gray7};
  }
`;

const CommentListLikes = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;

  & svg {
    fill: ${({ theme }) => theme.colors.gray5};
  }

  & span {
    margin-left: 4px;
  }
`;

const CommentListDate = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
`;

const CommentsList = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const Commentsitem = styled.li`
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

const CommentsForm = styled.form`
  margin-top: 16px;
`;

const CommentsFormFlex = styled.div`
  display: flex;
`;

const CommentsFormTextArea = styled.textarea`
  width: calc(100% - 86px);
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  resize: none;
  font-size: 14px;
  height: 35px;
  font-weight: 400;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.gray8};

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const CommentsFormSubmit = styled.button`
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  font-weight: 600;
  font-size: 13px;
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.gray2};

  /* :disabled
  background-color: var(--gray5);  */
`;
