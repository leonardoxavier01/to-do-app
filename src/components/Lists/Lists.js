import React from "react";
import { v4 as uuid } from "uuid";

import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Lists(props) {
  const newListTitleRef = React.useRef();

  function addListHandler(e) {
    e.preventDefault();

    const list = { id: uuid(), title: newListTitleRef.current.value };
    props.onAddList(list);

    newListTitleRef.current.value = "";
  }

  function removeListHandler(index) {
    props.onRemoveList(index);
  }

  return (
    <ul>
      {props.data.map((list, index) => (
        <li key={index}>
          <Link to={"/" + list.id}>{list.title}</Link>
          <button onClick={() => removeListHandler(index)}>x</button>
        </li>
      ))}
      <li>
        <form className="container_form" onSubmit={addListHandler}>
          <input className="input" type="text" placeholder="New List" ref={newListTitleRef} />
          <button className="button_add"><BiPlus size={17}/></button>
        </form>
      </li>
    </ul>
  );
}

export default Lists;
