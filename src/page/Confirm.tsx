import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dummyImage from '../styles/images/dummy-profile.png';
import { ReactComponent as RefreshSVG } from '../styles/images/icons/refresh.svg';
import { ReactComponent as ConfirmVoteSVG } from '../styles/images/icons/confirm-vote-icon.svg';

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

const ConfirmCard = styled.div`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
`;

const ConfirmCardInfo = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const ConfirmCardProfile = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  margin-right: 8px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ConfirmCardNickName = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const ConfirmCardDate = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmCardContent = styled.p`
  padding-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  line-height: 20px;
`;

const ConfirmVote = styled.form`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  margin-top: 4px;
`;

const ConfirmVoteInfo = styled.div`
  display: flex;
  align-items: center;

  & h5 {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
  }

  & svg {
    margin-right: 4px;
  }
`;

const ConfirmVoteData = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  margin-left: 12px;

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmVoteList = styled.button`
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  z-index: 3;

  /* active
  color: var(--gray2);
	background-color: var(--gray8); */
`;

const ConfirmVoteBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;

  & button + button {
    margin-left: 20px;
  }
`;

const ConfirmVoteSubmit = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
  cursor: initial;

  /* disabled 
  color: var(--gray5); 
	cursor: not-allowed; */
`;

const ConfirmVoteResult = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
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

        <section>
          <ul>
            <li>
              <ConfirmCard>
                <ConfirmCardInfo>
                  <ConfirmCardProfile>
                    <CoverImage src={dummyImage} />
                  </ConfirmCardProfile>
                  <div>
                    <ConfirmCardNickName>CNVXCX</ConfirmCardNickName>
                    <ConfirmCardDate>
                      7일 남음 <span>2022.11.27 ~ 2022.12.04</span>
                    </ConfirmCardDate>
                  </div>
                </ConfirmCardInfo>
                <ConfirmCardContent>
                  이번 주말에 데이트 나가는데 어떤지 봐주세요. 키 178, 몸무게
                  72kg 평소에 무난하게 입습니다. 급해요 꼭 투표부탁. 댓글로 다른
                  스타일 추천도 받습니다! 부탁!!!!!!!!!!
                </ConfirmCardContent>
              </ConfirmCard>

              <ConfirmVote>
                <ConfirmVoteInfo>
                  <ConfirmVoteSVG />
                  <h5>PICK</h5>
                  <ConfirmVoteData>
                    7일 남음
                    <span>2022.11.27 ~ 2022.12.04</span>
                  </ConfirmVoteData>
                </ConfirmVoteInfo>
                <ConfirmVoteList type="button">입고 나가요</ConfirmVoteList>
                <ConfirmVoteList type="button">다시 골라요</ConfirmVoteList>

                <ConfirmVoteBtns>
                  <ConfirmVoteSubmit type="submit">투표하기</ConfirmVoteSubmit>
                  <ConfirmVoteResult type="button">결과 확인</ConfirmVoteResult>
                </ConfirmVoteBtns>
              </ConfirmVote>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Confirm;
