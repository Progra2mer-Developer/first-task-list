import React from "react";
import { useDispatch } from "react-redux";
import Search from "../../components/Search/Search";
import TaskList from "../../components/TaskList/TaskList";
import TypeText from "../../components/TypeText/TypeText";
import { clearTaskList } from "../../redux/slices/taskListSlice";

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.homePage}>
      <div>
        <h1 className={s.title}>Task List</h1>
        <Search />
      </div>
      <div>
        <button
          className={s.clear}
          onClick={() => {
            if (
              window.confirm("Are you sure what you want to clear task list?")
            ) {
              dispatch(clearTaskList());
            }
          }}
        >
          Clear
        </button>

        <TaskList />
        <TypeText />
      </div>
    </div>
  );
};

export default HomePage;
