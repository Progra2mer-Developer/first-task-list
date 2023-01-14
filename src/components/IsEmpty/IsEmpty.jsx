import React from "react";

import s from "./IsEmpty.module.css";

const IsEmpty = () => {
  return (
    <div className={s.isEmpty}>
      <h2 className={s.text}>Task list is empty</h2>
    </div>
  );
};

export default IsEmpty;
