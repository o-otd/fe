import React from 'react';
import styled from 'styled-components';
import checkSVG from '../../../styles/images/icons/check.svg';
import { IAgeFilterProps } from 'types/Common';
import { ageCategory } from 'constant/bottomFilters';
import useSetCurrentFilters from 'hooks/useSetCurrentFilters';
import useSyncFilters from 'hooks/useSyncFilters';

function AgeFilter({ filterIndex }: IAgeFilterProps) {
  useSyncFilters(filterIndex);
  const { currentFilter, setCurrentFilterValues } = useSetCurrentFilters();
  const onChangeAgeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilterValues(filterIndex, e.target.value);
  };

  return (
    <BottomSheetAge>
      {ageCategory.map((age) => (
        <AgeInput key={age.id}>
          <input
            type="checkbox"
            name="age"
            value={age.value}
            id={String(age.value)}
            checked={currentFilter[filterIndex].includes(age.value)}
            onChange={onChangeAgeFilter}
          />
          <label htmlFor={String(age.value)}>{age.value}대</label>
        </AgeInput>
      ))}
    </BottomSheetAge>
  );
}

export default AgeFilter;

const BottomSheetAge = styled.div`
  padding: 0 16px;
`;

const AgeInput = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};

  & input {
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
    cursor: pointer;
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
    font-size: 15px;
    font-weight: 600;
    margin-left: 8px;
    cursor: pointer;
  }
`;
