import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BusinessState {
  companyName: string;
  developerCount: number;
  money: number;
}

const initialState: BusinessState = {
  companyName: "",
  developerCount: 5,
  money: 10000,
};

export const businessSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = `${action.payload} Company Inc.`;
    },
  },
});

export const { updateCompanyName } = businessSlice.actions;

export default businessSlice.reducer;
