import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    { text: "123", id: "1", computed: false, important: false },
    { text: "345", id: "2", computed: false, important: false },
    { text: "67", id: "3", computed: false, important: false },
    { text: "89", id: "4", computed: false, important: false },
    { text: "ab", id: "5", computed: false, important: false },
    { text: "cd", id: "6", computed: false, important: false },
    { text: "ef", id: "7", computed: false, important: false },
    { text: "gh", id: "8", computed: false, important: false },
    // { text: "ij", id: "9", computed: false, important: false },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTaskItem: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeTaskItem: (state, action) => {
      state.taskList = state.taskList.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearTaskList: (state) => {
      state.taskList = [];
    },
    toggleImportant: (state, action) => {
      const newTaskList = [];
      state.taskList.map((taskItem) => {
        const { id, text, author, completed, important } = taskItem;
        if (taskItem.id === action.payload) {
          newTaskList.push({
            id,
            text,
            author,
            completed,
            important: !important,
          });
        } else {
          newTaskList.push({ id, text, author, completed, important });
        }
      });
      console.log(newTaskList);
      // state.taskList = [...newTaskList];
    },
    toggleComplited: (state, action) => {},
  },
});

export const { addTaskItem, removeTaskItem, toggleImportant } =
  taskListSlice.actions;

export default taskListSlice.reducer;
