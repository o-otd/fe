import { createSlice } from '@reduxjs/toolkit';
import { authJoinByEmail } from 'redux/action/auth';

export interface IAuthState {
  authJoinByEmailLoading: boolean;
  authJoinByEmailDone: boolean;
  authJoinByEmailError: string | null;
}

const initialState: IAuthState = {
  authJoinByEmailLoading: false,
  authJoinByEmailDone: false,
  authJoinByEmailError: null,
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
      });
  },
});

export default authSlice;
