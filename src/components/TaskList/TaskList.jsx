import React from "react";

import TaskItem from "../TaskItem/TaskItem";

import s from "./TaskList.module.css";

const TaskList = () => {
  return (
    <div className={s.taskList}>
      <div>TaskList</div>
      <TaskItem />
    </div>
  );
};

export default TaskList;
