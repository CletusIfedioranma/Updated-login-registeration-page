import { configureStore, getDefaultMiddleware,} from '@reduxjs/toolkit';
import {authApi} from ".../service/authApi";
import authReducer from "../features/authSlice";
import {setupListeners} from '@reduxjs/toolkit/Query/react';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    {authApi.reducerpath}: authApi.reducer
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat()authApi.middleware
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
