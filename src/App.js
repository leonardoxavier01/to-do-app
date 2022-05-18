import React from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Lists from "./components/Lists/Lists";
import ListPage from "./pages/ListPage/ListPage";

const DUMMY_LISTS = [
  { id: uuid(), title: "Groceries" },
  { id: uuid(), title: "Movies" },
  { id: uuid(), title: "Books" }
];

const DUMMY_TASKS = [
  { id: uuid(), text: "Buy ingredients for cake", list: DUMMY_LISTS[0].id },
  { id: uuid(), text: "Buy fruits/vegetables", list: DUMMY_LISTS[0].id },
  { id: uuid(), text: "Why We Sleep", list: DUMMY_LISTS[2].id }
];

function App () {
  const [lists, setLists] = React.useState(DUMMY_LISTS);
  const [tasks, setTasks] = React.useState(DUMMY_TASKS);

  function addList(list) {
    setLists([...lists, list]);
  }

  function editList(newList) {
    const tempLists = lists.slice();
    const index = tempLists.findIndex((list) => list.id === newList.id);
    Object.assign(tempLists[index], newList);
    setLists(tempLists);
  }

  function removeList(id) {
    const tempLists = lists.slice();
    const index = tempLists.findIndex((list) => list.id === id);
    tempLists.splice(index, 1);
    setLists(tempLists);
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function editTask(newTask) {
    const tempTasks = tasks.slice();
    const index = tempTasks.findIndex((task) => task.id === newTask.id);
    Object.assign(tempTasks[index], newTask);
    setTasks(tempTasks);
  }

  function removeTask(id) {
    const tempTasks = tasks.slice();
    const index = tempTasks.findIndex((task) => task.id === id);
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  return (
    <Router>
      <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
      <Switch>
        {lists.map((list) => (
          <Route key={list.id} path={"/" + list.id}>
            <ListPage
              list={list}
              tasks={tasks}
              onAddTask={addTask}
              onEditTask={editTask}
              onRemoveTask={removeTask}
              onEditList={editList}
            />
          </Route>
        ))}
        <Route path="/">
          <p>Homepage</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
