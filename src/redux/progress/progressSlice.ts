import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ProgressCondition = "idle" | "working on it" | "done"

export interface ProgressState {
  value: number,
  condition: ProgressCondition
}

const initialState: ProgressState = {
  value: 0,
  condition: "idle"
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    startProgress: (state) => {
      if (state.value < 100) {
        state.value += 1
      } else {
        state.value = 100;
        state.condition = "done"
      }
    },
    changeCondition: (state, action: PayloadAction<ProgressCondition>) => {
      state.condition = action.payload
    },
    reset: (state) => {
      state.value = initialState.value;
      state.condition = "working on it"
    } 
  },
})

export const { startProgress, changeCondition, reset } = progressSlice.actions

export default progressSlice.reducer