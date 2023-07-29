import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import filterSlice from './filter';
import voteSlice from './vote';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  filter: filterSlice.reducer,
  vote: voteSlice.reducer,
});

export default rootReducer;
