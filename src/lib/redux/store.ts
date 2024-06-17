import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { newsSlice } from './slices';

const rootReducer = combineSlices(newsSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const newsStore = () => configureStore({
  reducer: rootReducer,
});

export type NewsStore = ReturnType<typeof newsStore>;
export type NewsDispatch = NewsStore['dispatch'];