import React from "react";
import { v4 as uuid } from "uuid";

import Task from "../../components/Task/Task";

function ListPage(props) {
  const newTaskTextRef = React.useRef();
  const tasks = props.tasks.filter((task) => task.list === props.list.id);

  function addTaskHandler(e) {
    e.preventDefault();
    const task = {
      id: uuid(),
      text: newTaskTextRef.current.value,
      list: props.list.id
    };
    props.onAddTask(task);
    newTaskTextRef.current.value = "";
  }

  return (
    <div>
      <h1>{props.list.title}</h1>{" "}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onRemove={props.onRemoveTask} />
          </li>
        ))}
        <li>
          <form onSubmit={addTaskHandler}>
            <input type="text" placeholder="New Task" ref={newTaskTextRef} />
            <button>Add</button>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default ListPage;
