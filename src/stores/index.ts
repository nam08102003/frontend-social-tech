import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import rootReducer from './reducers';

import baseRtkApi from './services';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware().concat(baseRtkApi.middleware);
    if (process.env.NODE_ENV === 'development') {
      return middleware.concat(logger);
    }

    return middleware;
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

declare module 'react-redux' {
  type DefaultRootState = AppState;

  function useDispatch<TDispatch = AppDispatch>(): TDispatch;
}

export { store };
