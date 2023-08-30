import React from 'react';
import { Link } from 'react-router-dom';
import MyPageArrowLeftPNG from '@svg/arrow-left-07.png';
import MyPageFollowerPNG from '@svg/mypage-follower.png';
import styled from 'styled-components';
import dummyImage from '../../styles/images/dummy-profile.png';

function Follow() {
  return (
    <>
      <Wrapper>
        <MyPageHeader>
          <div>
            <Link to={'/mypage'}>
              <button>
                <img src={MyPageArrowLeftPNG} />
              </button>

              <h3>CNVXCX</h3>
            </Link>
          </div>

          <MyPageTab>
            <li>
              <button>팔로잉(234)</button>
            </li>
            <li>
              <button>팔로워(14)</button>
            </li>
          </MyPageTab>
        </MyPageHeader>

        <UserList>
          <ul>
            {[1].map((element) => (
              <li key={element}>
                <UserProfile>
                  <Link to={'/'}>
                    <UserProfileImage>
                      <img src={dummyImage} />
                    </UserProfileImage>
                    <UserProfileInfo>
                      <UserProfileName>CNVXCX</UserProfileName>
                      <UserProfileFollower>
                        <b>93,308</b>팔로워
                      </UserProfileFollower>
                    </UserProfileInfo>
                  </Link>
                </UserProfile>

                <UserFollowBtn>
                  <img src={MyPageFollowerPNG} />

                  {/* <UnFollow>
                    @CNVXCX 님 언팔로우하기
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12.0527C9.995 12.0527 11.5 10.5477 11.5 8.55273C11.5 6.55773 9.995 5.05273 8 5.05273C6.005 5.05273 4.5 6.55773 4.5 8.55273C4.5 10.5477 6.005 12.0527 8 12.0527ZM9 13.0007H7C4.243 13.0007 2 15.2437 2 18.0007V19.0007H14V18.0007C14 15.2437 11.757 13.0007 9 13.0007ZM20.293 8.29373L18 10.5867L15.707 8.29373L14.293 9.70773L16.585 11.9997L14.292 14.2927L15.706 15.7067L17.999 13.4137L20.293 15.7077L21.707 14.2937L19.414 12.0007L21.707 9.70773L20.293 8.29373Z"
                        fill="#FF2D55"
                      />
                    </svg>
                  </UnFollow> */}
                </UserFollowBtn>
              </li>
            ))}
          </ul>
        </UserList>
      </Wrapper>
    </>
  );
}

export default Follow;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MyPageHeader = styled.section`
  padding: 0 10px;
  margin-top: 24px;

  & a {
    display: flex;
  }

  & h3 {
    margin-left: 10px;
  }

  & button {
    width: 20px;
    height: 20px;

    & img {
      width: 100%;
    }
  }
`;

const MyPageTab = styled.ul`
  display: flex;
  margin-top: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    flex-shrink: 0;
    height: 34px;

    & + & {
      margin-left: 5px;
    }

    & button {
      width: 100%;
      height: 100%;
      padding: 16px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
`;

const UserList = styled.section`
  margin-top: 14px;
  flex: 1;
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85px;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
    background-color: ${({ theme }) => theme.colors.gray3};
    padding: 0 16px;
  }

  li + li {
    margin-top: 4px;
  }
`;

const UserProfile = styled.div`
  height: 100%;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const UserProfileImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  width: 40px;
  height: 40px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const UserProfileInfo = styled.div`
  margin-left: 8px;
`;

const UserProfileName = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const UserProfileFollower = styled.div`
  margin-top: 2px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray7};

  & b {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray9};
    margin-right: 2px;
  }
`;

const UserFollowBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const UnFollow = styled.button`
  position: absolute;
  padding: 8px 16px;
  width: max-content;
  color: ${({ theme }) => theme.colors.tint1};
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius10};
  right: 0;
  top: calc(100% + 10px);
  display: flex;
  align-items: center;

  & svg {
    margin-left: 10px;
  }
`;
