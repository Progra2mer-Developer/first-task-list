import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTaskItem: (state, action) => {},
    removeTaskItem: (state, action) => {},
    toggleFavourite: (state, action) => {},
    toggleFavourite: (state, action) => {},
    toggleComplited: (state, action) => {},
  },
});

export const {} = taskListSlice.actions;

export default taskListSlice.reducer;
