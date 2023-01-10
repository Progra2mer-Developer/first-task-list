import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

import s from "./TypeText.module.css";

const TypeText = () => {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <div className={s.typeText}>
      <form onChange={(e) => e.preventDefault()}>
        <ReactTextareaAutosize
          className={s.input}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={() => console.log("submit")}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default TypeText;
