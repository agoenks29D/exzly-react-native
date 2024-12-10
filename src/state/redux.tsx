import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import appSlice from './app.slice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default function ReduxProvider({children}: {children: React.ReactNode}) {
  return <Provider store={store}>{children}</Provider>;
}
