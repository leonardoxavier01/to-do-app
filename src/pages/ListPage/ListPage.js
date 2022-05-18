import React from "react";
import { v4 as uuid } from "uuid";

import Task from "../../components/Task/Task";

function ListPage(props) {
  const newTaskTextRef = React.useRef();
  const listTitleRef = React.useRef();

  const [isEditting, setIsEditting] = React.useState(false);
  const [title, setTitle] = React.useState(props.list.title);

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

  function editButtonHandler() {
    if (isEditting) {
      props.onEditList({ id: props.list.id, title: title })
      setIsEditting(false)
    } else setIsEditting(true)
  }

  function editInputHandler(e) {
    setTitle(listTitleRef.current.value)
  }

  return (
    <div>
      {isEditting && (
        <form onSubmit={editButtonHandler}>
          <input
            type="text"
            value={title}
            ref={listTitleRef}
            onChange={editInputHandler}
          />
          <button>save</button>
        </form>
      )}

      {!isEditting && (
        <div>
          <h1>{props.list.title}</h1>{" "}
          <button onClick={editButtonHandler}>edit</button>
        </div>
      )}
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
