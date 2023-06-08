import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import articlesReducer from './articlesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
