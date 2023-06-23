import {
  IGetCommentsApiResponse,
  IGetCommentsRequest,
  IGetConfirmsApiResponse,
  IGetNestedCommentsRequest,
  IRegisterCommentApiResponse,
  IRegisterCommentRequest,
  IRegisterConfirmApiResponse,
  IRegisterConfirmRequest,
  IRegisterVoteRequest,
} from 'types/Home/Confirm';
import AuthApi from './core/AuthApi';
import { AxiosResponse } from 'axios';

const baseUrl = '/api/confirm';

export const registerConfirm = async (params: IRegisterConfirmRequest) => {
  const url = `${baseUrl}/register`;
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
    IRegisterConfirmRequest,
    AxiosResponse<IRegisterConfirmApiResponse>
  >(url, formData);

  return response.data;
};

export const registerComment = async (params: IRegisterCommentRequest) => {
  const url = `${baseUrl}/comment/register`;
  const { confirmId, content } = params;

  const formData = new FormData();

  formData.append('confirmId', confirmId);
  formData.append('content', content);

  const response = await AuthApi.post<
    IRegisterCommentRequest,
    AxiosResponse<IRegisterCommentApiResponse>
  >(url, formData);

  return response.data;
};

export const getConfirms = async () => {
  const url = `${baseUrl}/list`;

  const response = await AuthApi.post<
    void,
    AxiosResponse<IGetConfirmsApiResponse>
  >(url);
  return response.data;
};

export const getNestedComments = async (params: IGetNestedCommentsRequest) => {
  const { targetId, page, listSize } = params;

  const url = `${baseUrl}/nestedComment/list`;

  const formData = new FormData();
  formData.append('targetId', targetId);
  formData.append('page.page', page);
  formData.append('page.size', listSize);

  const response = await AuthApi.post<IGetNestedCommentsRequest, any>(
    url,
    formData,
  );

  return response.data;
};

export const registerVote = async (params: IRegisterVoteRequest) => {
  const { confirmId, voteType } = params;

  const url = `${baseUrl}/vote`;

  const formData = new FormData();

  formData.append('confirmId', confirmId.toString());
  formData.append('voteType', voteType);

  const response = await AuthApi.post(url, formData);

  return response.data;
};

export const getComments = async (params: IGetCommentsRequest) => {
  const { targetId, page, listSize } = params;
  const url = `${baseUrl}/comment/list`;

  const formData = new FormData();
  formData.append('targetId', targetId);
  formData.append('page.page', page);
  formData.append('page.size', listSize);

  const response = await AuthApi.post<
    IGetCommentsRequest,
    AxiosResponse<IGetCommentsApiResponse>
  >(url, formData);

  return response.data;
};
