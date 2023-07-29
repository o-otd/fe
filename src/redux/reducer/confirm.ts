import { createSlice } from '@reduxjs/toolkit';

export interface IConfirmState {
  voteDone: boolean;
  commentDone: boolean;
}

const initialState: IConfirmState = {
  voteDone: false,
  commentDone: false,
};

const confirmSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    setVoteDone: (state) => {
      state.voteDone = true;
    },

    resetVoteDone: (state) => {
      state.voteDone = false;
    },

    setCommentDone: (state) => {
      state.commentDone = true;
    },

    resetCommentDone: (state) => {
      state.commentDone = false;
    },
  },
});

export const { setVoteDone, resetVoteDone, setCommentDone, resetCommentDone } =
  confirmSlice.actions;
export default confirmSlice;
