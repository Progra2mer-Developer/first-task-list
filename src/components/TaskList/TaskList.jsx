import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import TaskItem from "../TaskItem/TaskItem";

import s from "./TaskList.module.css";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList.taskList);
  const searchString = useSelector((state) => state.taskList.searchString);

  const tasksRef = useRef();

  useEffect(() => {
    const domNode = tasksRef.current;

    if (domNode) {
      tasksRef.current.scrollTop = domNode.scrollHeight;
    }
  }, [taskList]);

  return (
    <div className={s.taskList} ref={tasksRef}>
      {taskList
        .filter((taskItem) => taskItem.text.includes(searchString))
        .map((taskItem) => {
          return <TaskItem key={taskItem.id} {...taskItem} />;
        })}
    </div>
  );
};

export default TaskList;
