import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    { text: "test item 1", id: "1", completed: true, important: false },
    { text: "test item 2", id: "2", completed: false, important: true },
    // { text: "test item 3", id: "3", completed: false, important: false },
    // { text: "test item 4", id: "4", completed: false, important: false },
    // { text: "test item 5", id: "5", completed: false, important: false },
    // { text: "test item 6", id: "6", completed: false, important: false },
    // { text: "test item 7", id: "7", completed: false, important: false },
    // { text: "test item 8", id: "8", completed: false, important: false },
    // { text: "test item 9", id: "9", completed: false, important: false },
  ],
  searchString: "",
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTaskItem: (state, action) => {
      if (action?.payload?.text?.length) {
        state.taskList.push(action.payload);
      }
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
        const { id, text, completed, important } = taskItem;
        if (id === action.payload) {
          newTaskList.push({
            id,
            text,
            completed,
            important: !important,
          });
        } else {
          newTaskList.push({ id, text, completed, important });
        }
      });
      state.taskList = [...newTaskList];
    },
    toggleComplited: (state, action) => {
      console.log("toggleComplited");
      const newTaskList = [];
      state.taskList.map((taskItem) => {
        const { id, text, completed, important } = taskItem;
        if (id === action.payload) {
          newTaskList.push({
            id,
            text,
            completed: !completed,
            important,
          });
        } else {
          newTaskList.push({ id, text, completed, important });
        }
      });
      console.log(newTaskList);
      state.taskList = [...newTaskList];
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const {
  addTaskItem,
  removeTaskItem,
  toggleImportant,
  toggleComplited,
  clearTaskList,
  setSearchString,
} = taskListSlice.actions;

export default taskListSlice.reducer;
