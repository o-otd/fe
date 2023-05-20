import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ILookTabItemProps } from 'types/Common';

function LookTabItem({ text, href }: ILookTabItemProps) {
  return <LookTabList to={href}>{text}</LookTabList>;
}

export default LookTabItem;

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
