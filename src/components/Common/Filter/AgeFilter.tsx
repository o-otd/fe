import React from 'react';
import styled from 'styled-components';
import checkSVG from '../../../styles/images/icons/check.svg';

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
  }
`;

function AgeFilter() {
  return (
    <BottomSheetAge>
      <AgeInput>
        <input type="radio" name="age" value="10대" id="teenager" />
        <label htmlFor="teenager">10대</label>
      </AgeInput>
      <AgeInput>
        <input type="radio" name="age" value="20대" id="twenties" />
        <label htmlFor="twenties">20대</label>
      </AgeInput>
      <AgeInput>
        <input type="radio" name="age" value="30대" id="thirties" />
        <label htmlFor="thirties">30대</label>
      </AgeInput>
    </BottomSheetAge>
  );
}

export default AgeFilter;
