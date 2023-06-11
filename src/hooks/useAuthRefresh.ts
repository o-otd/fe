import AuthApi from 'api/core/AuthApi';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeToken, resetAuthDone, setToken } from 'redux/reducer/auth';
import { RootState, useAppDispatch } from 'redux/store';
import { IDecodeJWT } from 'types/Common';
import { logout } from 'utils';

export default function useAuthRefresh() {
  const dispatch = useAppDispatch();
  const { authDone, accessToken } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    const tokenFromCookie = Cookie.get('accessToken');
    if (tokenFromCookie && !accessToken) {
      dispatch(setToken(tokenFromCookie));
    }
  }, []);

  useEffect(() => {
    if (authDone) {
      dispatch(resetAuthDone());
    }
    if (accessToken) {
      const decodedToken = jwtDecode<IDecodeJWT>(accessToken);
      const expiryTime = decodedToken.exp * 1000;
      const timeout = expiryTime - Date.now() - 5000;
      const timerId = setTimeout(async () => {
        try {
          const response = await AuthApi.post('/api/auth/refresh');
          const newToken = response.data.data.token;
          const expiresIn = response.data.data.expiration;
          Cookie.set('accessToken', newToken, {
            expires: expiresIn / (60 * 60 * 24),
          });

          dispatch(setToken(newToken));
        } catch (error) {
          console.error('Failed to refresh token: ', error);

          logout();
        }
      }, timeout);
      return () => clearTimeout(timerId);
    }
  }, [accessToken]);

  return accessToken;
}
