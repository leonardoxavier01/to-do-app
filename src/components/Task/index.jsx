import React, { useState, useRef } from "react";
import './styles.css'
import { BsPencilSquare } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const Task = (props) => {
  const taskTextRef = useRef();
  const taskDoneRef = useRef();
  const [isEditting, setIsEditting] = useState(false);
  const [text, setText] = useState(props.task.text);
  const [isDone, setIsDone] = useState(props.task.isDone);

  const editButtonHandler = () => {
    if (isEditting) {
      props.onEdit({ id: props.task.id, text: text });
      setIsEditting(false);
    } else setIsEditting(true);
  }

  const editInputHandler = () => {
    setText(taskTextRef.current.value);
  }

  const doneHandler = () => {
    setIsDone(taskDoneRef.current.value);
    props.onEdit({ id: props.task.id, isDone: isDone });
  }

  const removeHandler = () => {
    return props.onRemove(props.id);
  }

  return (
    <>
      {isEditting && (
        <form className="container_form_edit" onSubmit={editButtonHandler}>
          <input
          className="input"
            type="text"
            value={text}
            ref={taskTextRef}
            onChange={editInputHandler}
          />
          <button className="button_add">save</button>
        </form>
      )}
      {!isEditting && (
        <div className="container_task">
          <div className="text_checkbox">
            <input
              type="checkbox"
              onChange={doneHandler}
              ref={taskDoneRef}
              checked={isDone ? true : false}
            />
            <span>{text}</span>
          </div>
          <div className="buttons_task">
            <button className="button_task" onClick={editButtonHandler}>
              <BsPencilSquare color={"#1a8a52"} size={16} /></button>
            <button className="button_task" onClick={removeHandler}>
              <MdOutlineDelete color={"#c2473e"} size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
