import { configureStore } from "@reduxjs/toolkit";
import progressSlice from "./progress/progressSlice";
import projectsSlice from "./projects/projectsSlice";

export const store = configureStore({
  reducer: {
    progress: progressSlice,
    projects: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
