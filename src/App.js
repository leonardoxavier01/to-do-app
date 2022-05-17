import React from "react";
import { v4 as uuid } from "uuid";

import Lists from "./components/Lists/Lists";

const App = () => {
  const [lists, setLists] = React.useState([
    { id: uuid(), title: "Groceries" },
    { id: uuid(), title: "Movies" },
    { id: uuid(), title: "Books" }
  ]);

  function addList(list) {
    setLists([...lists, list]);
  }

  function removeList(id) {
    const tempLists = lists.slice();
    const index = tempLists.findIndex((list) => list.id === id);
    tempLists.splice(index, 1);
    setLists(tempLists);
  }

  return (
    <div>
      <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
    </div>
  );
}

export default App;
