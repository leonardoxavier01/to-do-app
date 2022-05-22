import React, { useState, useRef } from "react";
import TaskBox from "../TaskBox";
import InputEdit from "../InputEdit";

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
        <InputEdit
          width={90}
          placeholder={'Edit Task'}
          onSubmit={editButtonHandler}
          value={text}
          ref={taskTextRef}
          onChange={editInputHandler}
        />
      )}
      {!isEditting && (
        <TaskBox
          decoration={isDone ? 'line-through' : ''}
          doneHandler={doneHandler}
          ref={taskDoneRef}
          checked={isDone ? true : false}
          text={text}
          editButtonHandler={editButtonHandler}
          removeHandler={removeHandler}
        />
      )}
    </>
  );
}

export default Task;
