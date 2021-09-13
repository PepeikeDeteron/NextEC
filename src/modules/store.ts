import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@/modules/user/userSlice';
import { itemSlice } from '@/modules/item/itemSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    item: itemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
