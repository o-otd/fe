import { IRegisterApiRequest, IRegisterApiResponse } from 'types/Home';
import AuthApi from './core/AuthApi';
import { AxiosResponse } from 'axios';

const baseUrl = '/api/confirm/register';

export const registerConfirm = async (params: IRegisterApiRequest) => {
  const url = `${baseUrl}`;
  const { content, images, startDate, endDate } = params;

  const formData = new FormData();

  formData.append('content', content);

  images.forEach((image) => {
    formData.append('images', image.file);
  });

  //임시 date
  formData.append('startDate', startDate);
  formData.append('endDate', endDate);

  const response = await AuthApi.post<
    IRegisterApiRequest,
    AxiosResponse<IRegisterApiResponse>
  >(url, formData);

  return response.data;
};
