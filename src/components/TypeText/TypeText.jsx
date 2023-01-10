import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { addTaskItem } from "../../redux/slices/taskListSlice";

import s from "./TypeText.module.css";

const TypeText = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList.taskList);
  return (
    <div className={s.typeText}>
      <form onSubmit={(e) => e.preventDefault()} className={s.form}>
        <ReactTextareaAutosize
          ref={inputRef}
          className={s.input}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {/* <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="remove"
          onClick={() => {
            if (window.confirm("Are you sure you want to remove dialog?")) {
              console.log("123");
            }
          }}
          fill="#b8222095"
        >
          <g data-name="1" id="_1">
            <path d="M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z" />
            <path d="M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z" />
            <path d="M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z" />
            <path d="M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z" />
            <path d="M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z" />
            <path d="M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z" />
          </g>
        </svg> */}

        {text && (
          <svg
            onClick={() => {
              setText("");
              inputRef.current.focus();
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="28px"
            height="28px"
            className={s.clear}
            fill="#000"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
          </svg>
        )}
        <button
          type="submit"
          onClick={() => {
            dispatch(
              addTaskItem({
                text: text,
                id: Date.now(),
                complited: false,
                favourite: false,
              })
            );
            setText("");
            console.log(taskList);
          }}
          className={s.btn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TypeText;
