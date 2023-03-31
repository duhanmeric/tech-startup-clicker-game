import { configureStore } from '@reduxjs/toolkit'
import progressSlice from "./progress/progressSlice"

export const store = configureStore({
  reducer: {
    progress: progressSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch