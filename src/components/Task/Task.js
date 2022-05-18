import React from "react";

function Task(props) {
  function removeHandler() {
    return props.onRemove(props.id);
  }

  return (
    <div>
      <input type="checkbox" checked={props.task.isDone ? true : false} />
      <span>{props.task.text}</span>
      <button onClick={removeHandler}>x</button>
    </div>
  );
}

export default Task;
