import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

import s from "./Search.module.css";

const Search = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div className={s.search}>
      <ReactTextareaAutosize
        cacheMeasurements={false}
        className={s.search}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
