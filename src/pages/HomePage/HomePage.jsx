import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IsEmpty from "../../components/IsEmpty/IsEmpty";
import Search from "../../components/Search/Search";
import TaskList from "../../components/TaskList/TaskList";
import TypeText from "../../components/TypeText/TypeText";
import { clearTaskList } from "../../redux/slices/taskListSlice";

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList.taskList);
  return (
    <div className={s.homePage}>
      <div>
        <h1 className={s.title}>Task List</h1>
        <Search />
      </div>
      <div style={{ height: "calc(100% - 250px)" }}>
        {taskList?.length ? (
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
        ) : (
          <IsEmpty />
        )}
        {taskList?.length ? <TaskList /> : null}
        <TypeText />
      </div>
    </div>
  );
};

export default HomePage;
