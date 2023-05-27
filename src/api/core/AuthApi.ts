import axios from 'axios';
import { API_URL } from 'constant';
import Cookie from 'js-cookie';

const AuthApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

AuthApi.interceptors.request.use(
  (config) => {
    const accessToken = Cookie.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AuthApi.interceptors.response.use(
  async (response) => {
    if (response.data && response.data.code === 400) {
      const originalRequest = response.config;
      const accessToken = Cookie.get('accessToken');
      if (accessToken) {
        try {
          const response = await AuthApi.post('/api/auth/refresh');

          const newAccessToken = response.data.data.token;

          Cookie.set('accessToken', newAccessToken);

          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return AuthApi(originalRequest);
        } catch (error: any) {
          console.log('logout');

          return Promise.reject(error);
        }
      }
      return response;
    } else {
      return response;
    }
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default AuthApi;
