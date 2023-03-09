import { combineReducers } from '@reduxjs/toolkit';
import baseRtkApi from '../services';
import { authReducer } from '../slices/auth';
import { commonReducer } from '../slices/common';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  [baseRtkApi.reducerPath]: baseRtkApi.reducer,
});

export default rootReducer;
