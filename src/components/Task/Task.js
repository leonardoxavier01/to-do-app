import React from "react";

function Task(props) {
  const taskTextRef = React.useRef();
  const taskDoneRef = React.useRef();
  const [isEditting, setIsEditting] = React.useState(false);
  const [text, setText] = React.useState(props.task.text);
  const [isDone, setIsDone] = React.useState(props.task.isDone);

  function editButtonHandler() {
    if (isEditting) {
      props.onEdit({ id: props.task.id, text: text });
      setIsEditting(false);
    } else setIsEditting(true);
  }

  function editInputHandler() {
    setText(taskTextRef.current.value);
  }

  function doneHandler() {
    setIsDone(taskDoneRef.current.value);
    props.onEdit({ id: props.task.id, isDone: isDone });
  }

  function removeHandler() {
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
