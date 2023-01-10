import React from "react";
import Search from "../../components/Search/Search";
import TaskList from "../../components/TaskList/TaskList";
import TypeText from "../../components/TypeText/TypeText";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div>
        <h1 className={s.title}>Task List</h1>
        <Search />
      </div>
      <div>
        <TaskList />
        <TypeText />
      </div>
    </div>
  );
};

export default HomePage;
