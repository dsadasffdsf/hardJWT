import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';
import alertReducer from './slices/alertSlice';
import errorMiddleware from './middleware/errorMiddleware';

export const store = configureStore({
  reducer: { posts: postsReducer, user: usersReducer,alert:alertReducer },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
