import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@/features/user/userSlice'
import { itemSlice } from '@/features/item/itemSlice'

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    items: itemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
