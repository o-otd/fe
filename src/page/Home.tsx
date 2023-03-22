import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BookMarkSvg } from '../styles/images/icons/bookmark.svg';
import { ReactComponent as LikesSvg } from '../styles/images/icons/likes.svg';
import { ReactComponent as FollowSvg } from '../styles/images/icons/follow.svg';

const Card = styled.section`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  height: 200px;
  padding: 23px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const CardHeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  border: 1px solid ${({ theme }) => theme.colors.gray7};
  background-color: ${({ theme }) => theme.colors.gray9};
`;

const CardHeaderInfo = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  & strong {
    font-size: 17px;
    font-weight: 600;
  }

  & span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 2px;
  }
`;

const CardHeaderUtil = styled.ul`
  display: flex;
  & li {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};

    & button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        & path {
          fill: ${({ theme }) => theme.colors.gray6};
        }
      }
    }
  }

  & li + li {
    margin-left: 8px;
  }
`;

const CardItems = styled.ul`
  margin: 24px 0 0 16px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & li + li {
    margin-left: 12px;
  }

  & li {
    & span {
      font-size: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray7};
    }

    & div {
      margin-top: 5px;
      width: 72px;
      height: 72px;
      background-color: ${({ theme }) => theme.colors.gray5};
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
    }
  }
`;

const CardItem = styled.li``;

const Look = styled.section`
  & > h2 {
    margin: 24px 20px 0 20px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const LookTabSwiper = styled.div`
  margin-bottom: 17px;
  margin: 0 20px;

  & ul {
    & li {
      width: auto;
      padding: 8px 0px;
      font-size: 14px;
      font-weight: 700;
    }
  }
`;

function Home() {
  return (
    <>
      <Card>
        <div>
          <div>
            <div>
              <CardHeader>
                <CardHeaderUser>
                  <CardHeaderProfile></CardHeaderProfile>
                  <CardHeaderInfo>
                    <strong>Anonymous</strong>
                    <span>11월 3일 옷장</span>
                  </CardHeaderInfo>
                </CardHeaderUser>
                <CardHeaderUtil>
                  <li>
                    <button>
                      <LikesSvg />
                    </button>
                  </li>
                  <li>
                    <button>
                      <BookMarkSvg />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FollowSvg />
                    </button>
                  </li>
                </CardHeaderUtil>
              </CardHeader>
              <CardItems>
                <CardItem>
                  <button type="button">
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button">
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button">
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button">
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
                <CardItem>
                  <button type="button">
                    <span>outer</span>
                    <div></div>
                  </button>
                </CardItem>
              </CardItems>
            </div>
          </div>
        </div>
      </Card>
      <Look>
        <h2>오늘의 추천 look</h2>

        <LookTabSwiper>
          <ul>
            <li>베스트룩 👍</li>
            <li>기온별 추천룩 🌤</li>
            <li>TPO 추천룩 👔</li>
            <li>활동성 추천룩 🏄</li>
          </ul>
        </LookTabSwiper>
      </Look>
    </>
  );
}

export default Home;
