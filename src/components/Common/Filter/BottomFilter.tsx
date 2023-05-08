import React, { useState } from 'react';
import styled from 'styled-components';
import StyleFilter from './StyleFilter';
import GenderFilter from './GenderFilter';
import AgeFilter from './AgeFilter';
import ColorFilter from './ColorFilter';
import RangeFilter from './RangeFilter';
import { bottomSheetTabs } from 'constant';
import { IBottomFilterProps } from 'types/Common';
import { useAppDispatch } from 'redux/store';
import { resetFilters, setFilters } from 'redux/reducer/filter';

const BottomSheet = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(12, 10, 10, 0.75);
`;

const BottomSheetMain = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray2};
  width: 100%;
  height: 397px;
  z-index: 200;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const BottomSheetCategory = styled.div`
  padding: 38px 16px 21px 16px;
`;

const BottomSheetCategorys = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const TabCategory = styled.li<{ $active: boolean }>`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.gray6};
  position: ${({ $active }) => ($active ? 'relative' : 'none')};
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    `&:after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      width: 4px;
      height: 4px;
      background-color: ${theme.colors.main};
      border-radius: ${theme.borderRadius.borderRadius50};
      }`};
`;

const BottomSheetBtns = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 8px 16px 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
  cursor: pointer;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & li {
    width: 163px;
    text-align: center;
  }

  & li * {
    display: flex;
    justify-content: center;
    width: inherit;
    height: 44px;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
  }

  & li + li {
    margin-left: 16px;
  }
`;

const BottomSheetReset = styled.button`
  color: ${({ theme }) => theme.colors.gray8};
`;

const BottomSheetSubmit = styled.button`
  color: ${({ theme }) => theme.colors.gray1};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
`;

function BottomFilter({ setIsFilterOpen }: IBottomFilterProps) {
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (e: React.MouseEvent<HTMLLIElement>, tabId: number) => {
    setActiveTab(tabId);
  };
  const dispatch = useAppDispatch();

  const tabItems = [
    { name: '성별', id: 0, content: <GenderFilter filterIndex={0} /> },
    { name: '스타일', id: 1, content: <StyleFilter filterIndex={1} /> },
    { name: '연령대', id: 2, content: <AgeFilter filterIndex={2} /> },
    { name: '컬러', id: 3, content: <ColorFilter filterIndex={3} /> },
    {
      name: '키',
      id: 4,
      content: <RangeFilter filterType="height" filterIndex={4} />,
    },
    {
      name: '몸무게',
      id: 5,
      content: <RangeFilter filterType="weight" filterIndex={5} />,
    },
  ];

  const onClickCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const onClickBottomSheetMain = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickFilterReset = (
    e: React.MouseEvent<HTMLButtonElement>,
    activeTab: number,
  ) => {
    e.preventDefault();
    dispatch(resetFilters(activeTab));
  };

  const onClickSetFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    activeTab: number,
  ) => {
    e.preventDefault();
    dispatch(setFilters(activeTab));
    setIsFilterOpen(false);
  };

  return (
    <BottomSheet onClick={onClickCloseFilter}>
      <BottomSheetMain onClick={onClickBottomSheetMain}>
        <BottomSheetCategory>
          <BottomSheetCategorys>
            {bottomSheetTabs.map((tab) => (
              <TabCategory
                $active={tab.id === activeTab}
                key={tab.id}
                onClick={(e) => onClickTab(e, tab.id)}
              >
                {tab.name}
              </TabCategory>
            ))}
          </BottomSheetCategorys>
        </BottomSheetCategory>
        <form>
          <div>{tabItems[activeTab].content}</div>
          <BottomSheetBtns>
            <ul>
              <li>
                <BottomSheetReset
                  onClick={(e) => onClickFilterReset(e, activeTab)}
                >
                  {tabItems[activeTab].name} 재설정
                </BottomSheetReset>
              </li>
              <li>
                <BottomSheetSubmit
                  onClick={(e) => onClickSetFilter(e, activeTab)}
                >
                  옷장 구경하기
                </BottomSheetSubmit>
              </li>
            </ul>
          </BottomSheetBtns>
        </form>
      </BottomSheetMain>
    </BottomSheet>
  );
}

export default BottomFilter;
