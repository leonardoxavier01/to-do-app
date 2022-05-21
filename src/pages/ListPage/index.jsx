import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "../../components/Task";
import ListTitle from "../../components/ListTitle";
import InputText from "../../components/InputText";
import InputEdit from "../../components/InputEdit";

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

        <InputEdit
          width={50}
          onSubmit={editButtonHandler}
          value={title}
          ref={listTitleRef}
          onChange={editInputHandler}
        />
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
          <InputText
            onSubmit={addTaskHandler}
            placeholder={'New Task'}
            ref={newTaskTextRef}
          />
        </li>
      </ul>
    </div>
  );
}

export default ListPage;
