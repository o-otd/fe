import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from 'api/Api';
import { IAuthJoinByEmailData, IAuthJoinByEmailResponse } from 'types/Auth';

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
