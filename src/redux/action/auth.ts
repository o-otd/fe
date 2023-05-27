import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from 'api/core/Api';
import Cookie from 'js-cookie';
import {
  IAuthJoinByEmailData,
  IAuthJoinByEmailResponse,
  IAuthLogInByEmailData,
  IAuthLogInByEmailResponse,
} from 'types/Auth';

export const authJoinByEmail = createAsyncThunk<
  IAuthJoinByEmailResponse,
  IAuthJoinByEmailData
>('auth/joinByEmail', async (data, thunkApi) => {
  try {
    const { email, password, name } = data;

    const response = await Api.post(
      `/api/auth/join?email=${email}&name=${name}&password=${password}`,
    );

    if (response.data.ok) {
      return response.data;
    } else {
      return thunkApi.rejectWithValue(response.data.error);
    }
  } catch (error) {
    console.error(error);
    return thunkApi.rejectWithValue(error);
  }
});

export const authLoginByEmail = createAsyncThunk<
  IAuthLogInByEmailResponse,
  IAuthLogInByEmailData
>('auth/loginByEmail', async (data, thunkApi) => {
  try {
    const { email, password } = data;

    const response = await Api.post(
      `/api/auth/login?email=${email}&password=${password}`,
    );

    if (response.data.ok) {
      Cookie.set('accessToken', response.data.data.token);
      return response.data;
    } else {
      return thunkApi.rejectWithValue(response.data.error);
    }
  } catch (error) {
    console.error(error);
    return thunkApi.rejectWithValue(error);
  }
});
