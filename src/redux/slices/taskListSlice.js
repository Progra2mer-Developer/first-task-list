import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTaskItem: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeTaskItem: (state, action) => {},
    toggleFavourite: (state, action) => {},
    toggleFavourite: (state, action) => {},
    toggleComplited: (state, action) => {},
  },
});

export const { addTaskItem } = taskListSlice.actions;

export default taskListSlice.reducer;
