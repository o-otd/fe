import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalenderTitleButtonSvg from '@svg/calender-title-btn.png';
import CalenderPrevButtonSvg from '@svg/calender-prev-btn.png';
import CalenderNextButtonSvg from '@svg/calender-next-btn.png';
import { calenderDays, monthObject } from 'constant';
import { IConfirmCalenderProps } from 'types/Home/Confirm';
import { getFormattedMonth } from 'utils';

function ConfirmCalender({ date, onClose, onSelect }: IConfirmCalenderProps) {
  const [currentDate, setCurrentDate] = useState(date);
  const [monthDays, setMonthDays] = useState<
    (number | null | { day: number; disabled: boolean })[]
  >([]);
  const [selectedDay, setSelectedDay] = useState<{
    day: number;
    disabled: boolean;
  } | null>(null);

  const [selectDate, setSelectDate] = useState<string>('');
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

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const firstDay = new Date(newDate.setDate(1)).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      dateArray.push(null);
    }

    const today = new Date();
    for (let i = 1; i <= lastDay; i++) {
      if (
        year < today.getFullYear() ||
        (year === today.getFullYear() && month < today.getMonth()) ||
        (year === today.getFullYear() &&
          month === today.getMonth() &&
          i < today.getDate())
      ) {
        dateArray.push({ day: i, disabled: true });
      } else {
        dateArray.push({ day: i, disabled: false });
      }
    }

    return dateArray;
  };

  const prevCalendarHandler = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const nextCalendarHandler = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const dateClickHandler = (day: null | { day: number; disabled: boolean }) => {
    const dateString =
      String(currentDate.getFullYear()) +
      String(getFormattedMonth(currentDate)) +
      String(day?.day);
    setSelectDate(dateString);
    setSelectedDay(day);
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
            <button onClick={prevCalendarHandler}>
              <img src={CalenderPrevButtonSvg} alt="이전 달" />
            </button>

            <button onClick={nextCalendarHandler}>
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
                  <DateItem
                    $selected={selectedDay?.day === day.day}
                    key={idx}
                    onClick={() => dateClickHandler(day)}
                  >
                    <button disabled={day.disabled}>{day.day}</button>
                  </DateItem>
                );
              }
            })}
          </CalenderBodyDate>
        </section>
        <CalenderForm>
          <button onClick={() => onClose(false)}>취소</button>
          <button onClick={() => onSelect(selectDate)}>확인</button>
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

const DateItem = styled.li<{ $selected: boolean }>`
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.main : ''};
  border-radius: ${({ theme, $selected }) =>
    $selected ? theme.borderRadius.borderRadius50 : ''};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.gray1 : '')};
`;
