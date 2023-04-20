import { createSlice } from '@reduxjs/toolkit';
import { authJoinByEmail, authLoginByEmail } from 'redux/action/auth';

export interface IAuthState {
  authJoinByEmailLoading: boolean;
  authJoinByEmailDone: boolean;
  authJoinByEmailError: string | null;
  authLoginByEmailLoading: boolean;
  authLoginByEmailDone: boolean;
  authLoginByEmailError: string | null;
}

const initialState: IAuthState = {
  authJoinByEmailLoading: false,
  authJoinByEmailDone: false,
  authJoinByEmailError: null,
  authLoginByEmailLoading: false,
  authLoginByEmailDone: false,
  authLoginByEmailError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authJoinByEmail.pending, (state) => {
        state.authJoinByEmailLoading = true;
        state.authJoinByEmailDone = false;
        state.authJoinByEmailError = null;
      })
      .addCase(authJoinByEmail.fulfilled, (state, action) => {
        state.authJoinByEmailLoading = false;
        state.authJoinByEmailDone = true;
        state.authJoinByEmailError = null;
      })
      .addCase(authJoinByEmail.rejected, (state, action) => {
        state.authJoinByEmailLoading = false;
        state.authJoinByEmailDone = false;
        state.authJoinByEmailError = action.payload as string;
      })
      .addCase(authLoginByEmail.pending, (state) => {
        state.authLoginByEmailLoading = true;
        state.authLoginByEmailDone = false;
        state.authLoginByEmailError = null;
      })
      .addCase(authLoginByEmail.fulfilled, (state, action) => {
        state.authLoginByEmailLoading = false;
        state.authLoginByEmailDone = true;
        state.authLoginByEmailError = null;
      })
      .addCase(authLoginByEmail.rejected, (state, action) => {
        state.authLoginByEmailLoading = false;
        state.authLoginByEmailDone = false;
        state.authLoginByEmailError = action.payload as string;
      });
  },
});

export default authSlice;
