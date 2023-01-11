import React from "react";
import { useSelector } from "react-redux";

import TaskItem from "../TaskItem/TaskItem";

import s from "./TaskList.module.css";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList.taskList);

  return (
    <div className={s.taskList}>
      {taskList.map((taskItem) => {
        return <TaskItem key={taskItem.id} {...taskItem} />;
      })}
    </div>
  );
};

export default TaskList;
