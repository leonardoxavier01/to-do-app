import React from "react";
import { v4 as uuid } from "uuid";

const Lists = (props) => {
    const newListTitleRef = React.useRef();

    function addListHandler(e) {
        e.preventDefault();

        const list = { id: uuid(), title: newListTitleRef.current.value };
        props.onAddList(list);

        newListTitleRef.current.value = "";
    }

    function removeListHandler(id) {
        props.onRemoveList(id);
    }

    return (
        <ul>
            {props.data.map((list) => (
                <li key={list.id}>
                    <span>{list.title}</span>
                    <button onClick={() => removeListHandler(list.id)}>x</button>
                </li>
            ))}
            <li>
                <form onSubmit={addListHandler}>
                    <input type="text" placeholder="New List" ref={newListTitleRef} />
                    <button>Add</button>
                </form>
            </li>
        </ul>
    );
}

export default Lists;
