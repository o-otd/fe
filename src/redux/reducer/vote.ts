import { createSlice } from '@reduxjs/toolkit';

export interface IVoteState {
  voteDone: boolean;
}

const initialState: IVoteState = {
  voteDone: false,
};

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    setVoteDone: (state) => {
      state.voteDone = true;
    },

    resetVoteDone: (state) => {
      state.voteDone = false;
    },
  },
});

export const { setVoteDone, resetVoteDone } = voteSlice.actions;
export default voteSlice;
