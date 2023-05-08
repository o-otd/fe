import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import filterSlice from './filter';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
