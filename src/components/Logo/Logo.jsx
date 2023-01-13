import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../constants";

import s from "./Logo.module.css";

const Logo = () => {
  return <Link to={HOME_PAGE_ROUTE} className={s.logo}>Logo</Link>;
};

export default Logo;
