import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routesConfig";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      {routes.map((route) => {
        return (
          <NavLink
            to={route.path}
            key={route.name}
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
          >
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
