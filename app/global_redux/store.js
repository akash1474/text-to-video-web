"use client"
import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './features/videoSlice';
import userReducer from './features/userSlice';

export const store= configureStore({
  reducer: {
    video:videoReducer,
    user:userReducer
  },
});
