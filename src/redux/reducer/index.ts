import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import filterSlice from './filter';
import confirmSlice from './confirm';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  filter: filterSlice.reducer,
  confirm: confirmSlice.reducer,
});

export default rootReducer;
