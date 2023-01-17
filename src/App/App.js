import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { initialStorage } from "../redux/slices/taskListSlice";
import { hideRoutes, routes } from "../routesConfig";

import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialStorage());
  }, []);
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        {routes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.path} />
          );
        })}
        {hideRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
