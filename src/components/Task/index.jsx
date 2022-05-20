import React, { useState, useRef } from "react";

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
    <div>
      <input
        type="checkbox"
        onChange={doneHandler}
        ref={taskDoneRef}
        checked={isDone ? true : false}
      />
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
        <span>
          <span>{text}</span>
          <button onClick={editButtonHandler}>edit</button>
        </span>
      )}
      <button onClick={removeHandler}>x</button>
    </div>
  );
}

export default Task;
