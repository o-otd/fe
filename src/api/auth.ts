import {
  IJoinByEmailData,
  IJoinByEmailApiResponse,
  ILogInByEmailData,
  IAuthLogInByEmailApiResponse,
} from 'types/Auth';
import Api from './core/Api';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const baseUrl = '/api/auth';

export const joinByEmail = async (params: IJoinByEmailData) => {
  const url = `${baseUrl}/join`;
  const { email, password, name } = params;

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('name', name);

  const response = await Api.post<
    IJoinByEmailData,
    AxiosResponse<IJoinByEmailApiResponse>
  >(url, formData);

  return response.data;
};

export const logInByEmail = async (params: ILogInByEmailData) => {
  const url = `${baseUrl}/login`;
  const { email, password } = params;

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await Api.post<
    ILogInByEmailData,
    AxiosResponse<IAuthLogInByEmailApiResponse>
  >(url, formData);

  if (response.data.ok) {
    const expiresIn = response.data.data.expiration;

    Cookies.set('accessToken', response.data.data.token, {
      expires: expiresIn / (60 * 60 * 24),
    });
  }

  return response.data;
};
