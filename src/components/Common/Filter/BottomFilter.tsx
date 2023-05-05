import React from 'react';
import styled from 'styled-components';
import StyleFilter from './StyleFilter';
import GenderFilter from './GenderFilter';
import AgeFilter from './AgeFilter';

const BottomSheet = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(12, 10, 10, 0.75);
`;

const BottomSheetMain = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray2};
  width: 100%;
  height: 397px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const BottomSheetCategory = styled.div`
  padding: 38px 16px 21px 16px;
`;

const BottomSheetCategorys = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const BottomSheetBtns = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 8px 16px 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};

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

function BottomFilter() {
  return (
    <BottomSheet>
      <BottomSheetMain>
        <BottomSheetCategory>
          <BottomSheetCategorys>
            <li>성별</li>
            <li>스타일</li>
            <li>연령대</li>
            <li>컬러</li>
            <li>키</li>
            <li>몸무게</li>
          </BottomSheetCategorys>
        </BottomSheetCategory>
        <form>
          <div>
            {/* <GenderFilter /> */}
            {/* <StyleFilter /> */}
            <AgeFilter />
          </div>
          <BottomSheetBtns>
            <ul>
              <li>
                <BottomSheetReset>성별 재설정</BottomSheetReset>
              </li>
              <li>
                <BottomSheetSubmit>옷장 구경하기</BottomSheetSubmit>
              </li>
            </ul>
          </BottomSheetBtns>
        </form>
      </BottomSheetMain>
    </BottomSheet>
  );
}

export default BottomFilter;
