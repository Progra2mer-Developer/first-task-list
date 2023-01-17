import React from "react";
import { useLocation } from "react-router-dom";

import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div className={s.notFoundPage}>
      <div className={s.inner}>
        <h2 className={s.text}>Page Not Found </h2>
        <h3>
          Not match for <u>{location.pathname}</u>
          <u></u>
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
