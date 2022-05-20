import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import ListName from "../ListName";
import { FaBuffer } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

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
          <Link className="name_list" to={"/" + list.id}>
            <ListName>
              <div className="margin_left">
                <FaBuffer color={"#1a8a52"} />
                <span>{list.title}</span>
              </div>
              <button className="button_add margin_rigth"
                onClick={() => removeListHandler(list.id)}>x</button>
            </ListName>
          </Link>
        </li>
      ))}
      <li>
        <form className="container_form" onSubmit={addListHandler}>
          <input className="input" type="text" maxLength="16" placeholder="New List" ref={newListTitleRef} />
          <button className="button_add"><BiPlus size={17} /></button>
        </form>
      </li>
    </ul>
  );
}

export default Lists;