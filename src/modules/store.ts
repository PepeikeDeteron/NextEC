import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@/modules/user/userSlice'
import { itemSlice } from '@/modules/item/itemSlice'

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    items: itemSlice.reducer,
  },
  /*
   * FIXME:
      A non-serializable value was detected in an action,
      in the path: `payload.0.created_at`. Value:
  */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.0.created_at'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
