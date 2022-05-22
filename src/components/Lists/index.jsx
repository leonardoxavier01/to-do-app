import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import ListNameBox from "../ListNameBox";
import InputText from '../InputText'

const Lists = (props) => {
  const [activeLink, setActiveLink] = useState('/')

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
          <Link  onClick={() => setActiveLink("/" + list.id)} to={"/" + list.id}>
            <ListNameBox
              color={activeLink === "/" + list.id ? '#b7d8cd' : '#f3faf8'}
              title={list.title}
              onClickButton={() => removeListHandler(list.id)}
            />
          </Link>
        </li>
      ))}
      <li>
        <InputText
          onSubmit={addListHandler}
          placeholder={'New List'}
          ref={newListTitleRef}
        />
      </li>
    </ul>
  );
}

export default Lists;
