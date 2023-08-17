import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  accessToken: string | null;
}

const initialState: IAuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice;
