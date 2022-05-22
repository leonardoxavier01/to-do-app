import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import ListNameBox from "../ListNameBox";
import Input from '../InputText'

const Lists = (props) => {
  const newListTitleRef = useRef();

  const addListHandler = (e) => {
    e.preventDefault();

    const list = { id: uuid(), title: newListTitleRef.current.value };
    props.onAddList(list);

    newListTitleRef.current.value = "";
  }

  const removeListHandler = (id) => {
    props.onRemoveList(id);
  }

  return (
    <ul>
      {props.data.map((list, index) => (
        <li key={index}>
          <Link to={"/" + list.id}>
            <ListNameBox
              title={list.title}
              onClick={() => removeListHandler(list.id)}
            />
          </Link>
        </li>
      ))}
      <li>
        <Input
          onSubmit={addListHandler}
          placeholder={'New List'}
          ref={newListTitleRef}
        />
      </li>
    </ul>
  );
}

export default Lists;
