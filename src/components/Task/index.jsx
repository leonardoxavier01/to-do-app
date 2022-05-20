import React, { useState, useRef } from "react";
import './styles.css'

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
    <div className="container_task">
      {isEditting && (
        <form onSubmit={editButtonHandler}>
          <input
            type="text"
            value={text}
            ref={taskTextRef}
            onChange={editInputHandler}
          />
          <button>save</button>
        </form>
      )}
      {!isEditting && (
        <>
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
            <button onClick={editButtonHandler}>edit</button>
            <button onClick={removeHandler}>x</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
