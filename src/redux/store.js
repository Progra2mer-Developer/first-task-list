import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./slices/taskListSlice";
export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
