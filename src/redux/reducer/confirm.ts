import { createSlice } from '@reduxjs/toolkit';

export interface IConfirmState {
  voteDone: boolean;
  deleteCommentId: number | null;
}

const initialState: IConfirmState = {
  voteDone: false,
  deleteCommentId: null,
};

const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    setVoteDone: (state) => {
      state.voteDone = true;
    },

    resetVoteDone: (state) => {
      state.voteDone = false;
    },

    setDeleteComment: (state, actions) => {
      state.deleteCommentId = actions.payload;
    },
  },
});

export const { setVoteDone, resetVoteDone, setDeleteComment } =
  confirmSlice.actions;
export default confirmSlice;
