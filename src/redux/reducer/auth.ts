import { createSlice } from '@reduxjs/toolkit';
import { authJoinByEmail, authLoginByEmail } from 'redux/action/auth';

export interface IAuthState {
  authDone: boolean;
  authError: string | null;
  authLoading: boolean;
  accessToken: string | null;
}

const initialState: IAuthState = {
  authDone: false,
  authError: null,
  authLoading: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthDone: (state) => {
      state.authDone = false;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeToken: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authJoinByEmail.pending, (state) => {
        state.authLoading = true;
        state.authDone = false;
        state.authError = null;
      })
      .addCase(authJoinByEmail.fulfilled, (state, action) => {
        state.authLoading = false;
        state.authDone = true;
        state.authError = null;
      })
      .addCase(authJoinByEmail.rejected, (state, action) => {
        state.authLoading = false;
        state.authDone = false;
        state.authError = action.payload as string;
      })
      .addCase(authLoginByEmail.pending, (state) => {
        state.authLoading = true;
        state.authDone = false;
        state.authError = null;
      })
      .addCase(authLoginByEmail.fulfilled, (state, action) => {
        state.authLoading = false;
        state.authDone = true;
        state.authError = null;
        state.accessToken = action.payload.data.token;
      })
      .addCase(authLoginByEmail.rejected, (state, action) => {
        state.authLoading = false;
        state.authDone = false;
        state.authError = action.payload as string;
      });
  },
});

export const { resetAuthDone, setToken, removeToken } = authSlice.actions;
export default authSlice;
