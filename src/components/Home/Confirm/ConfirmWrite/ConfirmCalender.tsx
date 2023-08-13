import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalenderTitleButtonSvg from '@svg/calender-title-btn.png';
import CalenderPrevButtonSvg from '@svg/calender-prev-btn.png';
import CalenderNextButtonSvg from '@svg/calender-next-btn.png';
import { calenderDays, monthObject } from 'constant';

interface IConfirmCalenderProps {
  date: Date;
}

function ConfirmCalender({ date }: IConfirmCalenderProps) {
  const [currentDate, setCurrentDate] = useState(date);
  const [monthDays, setMonthDays] = useState<
    (number | null | { day: number; disabled: boolean })[]
  >([]);

  useEffect(() => {
    const newMonthDays = datePrint(currentDate);

    setMonthDays(newMonthDays);
  }, [currentDate]);

  const transformMonth = (month: number) => {
    return monthObject[month];
  };

  const datePrint = (date: Date) => {
    let dateArray = [];

    const newDate = new Date(date);
    const adjDate = newDate.getDate();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const firstDay = new Date(newDate.setDate(1)).getDay();
    const lastDay = new Date(year, month, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      dateArray.push(null);
    }

    for (let i = 1; i <= lastDay; i++) {
      if (date.getMonth() + 1 < month) {
        dateArray.push(i);
      } else if (date.getMonth() + 1 > month) {
        dateArray.push({ day: i, disabled: true });
      } else {
        const isDisabled = adjDate > i;
        dateArray.push({ day: i, disabled: isDisabled });
      }
    }

    return dateArray;
  };

  return (
    <Calender>
      <CalenderBackDrop />
      <CalenderContent>
        <CalenderHeader>
          <CalenderHeaderYear>
            <span>{`${transformMonth(
              currentDate.getMonth() + 1,
            )} ${currentDate.getFullYear()}`}</span>
            <button>
              <img src={CalenderTitleButtonSvg} alt="날짜 선택하기" />
            </button>
          </CalenderHeaderYear>
          <CalenderHeaderControl>
            <button>
              <img src={CalenderPrevButtonSvg} alt="이전 달" />
            </button>

            <button>
              <img src={CalenderNextButtonSvg} alt="다음 달" />
            </button>
          </CalenderHeaderControl>
        </CalenderHeader>

        <section>
          <CalenderBodyDay>
            {calenderDays.map((day) => (
              <li key={day.id}>{day.day}</li>
            ))}
          </CalenderBodyDay>
          <CalenderBodyDate>
            {monthDays.map((day, idx) => {
              if (day === null) {
                return <li key={idx}></li>;
              } else if (typeof day === 'number') {
                return (
                  <li key={idx}>
                    <button>{day}</button>
                  </li>
                );
              } else {
                return (
                  <li key={idx}>
                    <button disabled={day.disabled}>{day.day}</button>
                  </li>
                );
              }
            })}
          </CalenderBodyDate>
        </section>
        <CalenderForm>
          <button>취소</button>
          <button>확인</button>
        </CalenderForm>
      </CalenderContent>
    </Calender>
  );
}

export default ConfirmCalender;

const Calender = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const CalenderBackDrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.83);
`;

const CalenderContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - (16 * 2px));
  height: 381px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius14};
  background-color: ${({ theme }) => theme.colors.gray2};
  padding: 27px 16px 0 16px;
`;

const CalenderHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalenderHeaderYear = styled.div`
  font-size: 17px;
  font-weight: 700;

  & button {
    margin-left: 8px;
  }
`;

const CalenderHeaderControl = styled.div`
  & button + button {
    margin-left: 30px;
  }
`;

const CalenderBodyDay = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;

  & li {
    font-size: 13px;
    color: rgba(235, 235, 245, 0.3);
  }
`;

const CalenderBodyDate = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 4px;
  text-align: center;

  & li {
    width: 40px;
    height: 40px;

    & button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:disabled {
        color: ${({ theme }) => theme.colors.gray3};
      }
    }
  }
`;

const CalenderForm = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(84, 84, 88, 0.65);

  & button {
    flex: 1;
    text-align: center;
    height: 100%;

    &:first-of-type {
      border-right: 1px solid rgba(84, 84, 88, 0.65);
    }
  }
`;
