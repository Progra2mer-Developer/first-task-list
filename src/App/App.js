import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { routes } from "../routesConfig";

import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        {routes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.name} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
