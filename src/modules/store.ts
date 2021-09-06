import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '@/modules/users/usersSlice';

export const store = configureStore({
  reducer: {
    user: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
