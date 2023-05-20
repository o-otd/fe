import { lookTabCategory } from 'constant/lookTab';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LookTabItem from './LookTabItem';

function LookTabs() {
  return (
    <LookTab>
      <LookTabLists>
        {lookTabCategory.map((category) => (
          <LookTabItem
            key={category.id}
            href={category.href}
            text={category.text}
          />
        ))}
      </LookTabLists>
    </LookTab>
  );
}

export default LookTabs;

const LookTab = styled.div`
  overflow-x: scroll;
  margin: 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LookTabLists = styled.ul`
  display: flex;
  margin-bottom: 17px;
  margin: 0 20px;
`;

const LookTabList = styled(NavLink)`
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;

  & + a {
    margin-left: 37px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  }
`;
