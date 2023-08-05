import { createSlice } from '@reduxjs/toolkit';

export interface IConfirmState {
  voteDone: boolean;
  commentDone: boolean;
  deleteCommentId: number | null;
}

const initialState: IConfirmState = {
  voteDone: false,
  commentDone: false,
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

    setCommentDone: (state) => {
      state.commentDone = true;
    },

    resetCommentDone: (state) => {
      state.commentDone = false;
    },
    setDeleteComment: (state, actions) => {
      state.deleteCommentId = actions.payload;
    },
  },
});

export const {
  setVoteDone,
  resetVoteDone,
  setCommentDone,
  resetCommentDone,
  setDeleteComment,
} = confirmSlice.actions;
export default confirmSlice;
