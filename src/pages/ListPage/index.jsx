import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "../../components/Task";
import ListTitle from "../../components/ListTitle";
import { BiPlus } from "react-icons/bi";

const ListPage = (props) => {
  const listTitleRef = useRef();
  const newTaskTextRef = useRef();

  const [isEditting, setIsEditting] = useState(false);
  const [title, setTitle] = useState(props.list.title);

  const tasks = props.tasks.filter((task) => task.list === props.list.id);

  const addTaskHandler = (e) => {
    e.preventDefault();
    const task = {
      id: uuid(),
      text: newTaskTextRef.current.value,
      list: props.list.id
    };
    props.onAddTask(task);
    newTaskTextRef.current.value = "";
  }

  const editButtonHandler = () => {
    if (isEditting) {
      props.onEditList({ id: props.list.id, title: title });
      setIsEditting(false);
    } else setIsEditting(true);
  }

  const editInputHandler = (e) => {
    setTitle(listTitleRef.current.value);
  }

  return (
    <div>
      {isEditting && (
        <form className="container_form_edit" onSubmit={editButtonHandler}>
          <input
            className="input"
            type="text"
            value={title}
            ref={listTitleRef}
            onChange={editInputHandler}
          />
          <button className="button_add">save</button>
        </form>
      )}

      {!isEditting && (
        <ListTitle onClickHandle={editButtonHandler}>{props.list.title}</ListTitle>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onEdit={props.onEditTask}
              onRemove={() => props.onRemoveTask(task.id)}
            />
          </li>
        ))}
        <li>
          <form className="container_form margin_top" onSubmit={addTaskHandler}>
            <input className="input" type="text" placeholder="New Task" ref={newTaskTextRef} />
            <button className="button_add"><BiPlus size={17} /></button>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default ListPage;
