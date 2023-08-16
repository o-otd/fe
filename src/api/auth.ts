import { IJoinByEmailData, IJoinByEmailApiResponse } from 'types/Auth';
import Api from './core/Api';
import { AxiosResponse } from 'axios';

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
