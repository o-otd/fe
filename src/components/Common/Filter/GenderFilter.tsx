import React, { useEffect } from 'react';
import styled from 'styled-components';
import checkSVG from '../../../styles/images/icons/check.svg';
import { IGenderFilterProps } from 'types/Common';
import useSetCurrentFilters from '../../../hooks/useSetCurrentFilters';
import useSyncFilters from 'hooks/useSyncFilters';

function GenderFilter({ filterIndex }: IGenderFilterProps) {
  useSyncFilters(filterIndex);
  const { currentFilter, setCurrentFilterValues } = useSetCurrentFilters();
  const onChangeGenderFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilterValues(filterIndex, e.target.value);
  };

  return (
    <BottomSheetGender>
      <GenderInput>
        <input
          onChange={onChangeGenderFilter}
          type="checkbox"
          name="gender"
          value={0}
          id="male"
          checked={currentFilter[filterIndex].includes(0)}
        />
        <label htmlFor="male">남성</label>
      </GenderInput>
      <GenderInput>
        <input
          onChange={onChangeGenderFilter}
          type="checkbox"
          name="gender"
          value={1}
          checked={currentFilter[filterIndex].includes(1)}
          id="female"
        />
        <label htmlFor="female">여성</label>
      </GenderInput>
    </BottomSheetGender>
  );
}

export default GenderFilter;

const BottomSheetGender = styled.div`
  padding: 0 16px;
`;

const GenderInput = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};

  & input {
    cursor: pointer;
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};

    &:checked {
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.main};
      border: none;

      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url(${checkSVG}) no-repeat center / cover;
      }
    }
  }

  & label {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    margin-left: 8px;
  }
`;
