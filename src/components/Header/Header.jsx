import React from "react";
import { routes } from "../../routesConfig";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
