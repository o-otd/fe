import AuthApi from 'api/core/AuthApi';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { IDecodeJWT } from 'types/Common';

export default function useAuth() {
  const [token, setToken] = useState(Cookie.get('accessToken'));

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<IDecodeJWT>(token);
      const expiryTime = decodedToken.exp * 1000;
      const timeout = expiryTime - Date.now() - 5000;
      const timerId = setTimeout(async () => {
        try {
          const response = await AuthApi.post('/api/auth/refresh', {});
          const newToken = response.data.data.token;
          const expiresIn = response.data.data.expiration;
          Cookie.set('accessToken', newToken, {
            expires: expiresIn / (60 * 60 * 24),
          });
          setToken(newToken);
        } catch (error) {
          console.error('Failed to refresh token: ', error);
          Cookie.remove('accessToken');
          setToken(undefined);
        }
      }, timeout);

      return () => clearTimeout(timerId);
    }
  }, [token]);

  return token;
}
