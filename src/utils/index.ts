import { removeToken } from 'redux/reducer/auth';
import Cookie from 'js-cookie';
import store from 'redux/store';
import moment from 'moment';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const logout = () => {
  store.dispatch(removeToken());
  Cookie.remove('accessToken');
  alert('로그아웃 되었습니다.');
};

export const getFormattedDate = (date: string) => {
  const formattedDae =
    date !== '' ? moment(parseInt(date), 'YYYYMMDD').format('YYYY.MM.DD') : '';

  return formattedDae;
};

export const getStringDate = (date: string) => {
  console.log(date);
  const stringDate = date !== '' ? date.split('.').join('') : '';

  return stringDate;
};

export const getFormattedMonth = (date: Date) => {
  const month = date.getMonth() + 1;
  return month < 10 ? `0${month}` : `${month}`;
};

export const daysRemaining = (targetDateStr: string) => {
  const formattedDateStr = targetDateStr.split('.').join('-');

  const targetDate = new Date(formattedDateStr);
  const currentDate = new Date();

  const diff = targetDate.getTime() - currentDate.getTime();

  const days = Math.ceil(diff / (24 * 60 * 60 * 1000));

  return days;
};
