import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dummyImage from '../styles/images/dummy-profile.png';
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
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Confirm;
