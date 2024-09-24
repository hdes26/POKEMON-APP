import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './features/sortSlice';
import modalReducer from './features/modalSlice';

export const store = configureStore({
  reducer: {
    sortReducer,
    modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch