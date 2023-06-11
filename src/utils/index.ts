import { removeToken } from 'redux/reducer/auth';
import Cookie from 'js-cookie';
import store from 'redux/store';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const logout = () => {
  store.dispatch(removeToken());
  Cookie.remove('accessToken');
  alert('로그아웃 되었습니다.');
};
