import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageArrowRightPNG from '@svg/arrow-right-07.png';

interface IMyPageLinkProps {
  linkTitle: string;
  href: string;
}

function MyPageLink({ linkTitle, href }: IMyPageLinkProps) {
  return (
    <MyPageBoxLink>
      <Link to={href}>
        <h4>{linkTitle}</h4>
        <span>123</span>
        <button>
          <img src={MyPageArrowRightPNG} />
        </button>
      </Link>
    </MyPageBoxLink>
  );
}

const MyPageBoxLink = styled.section`
  margin-top: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: ${({ theme }) => theme.colors.gray3};

  & a {
    display: flex;
    align-items: center;
    padding: 23px 16px;
    position: relative;
  }

  & h4 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 13px;
  }

  & span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
  }

  & button {
    position: absolute;
    right: 16px;
    width: 24px;
    height: 24px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default MyPageLink;
