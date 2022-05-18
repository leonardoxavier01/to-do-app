import React from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Lists from "./components/Lists/Lists";
import ListPage from "./pages/ListPage/ListPage";

import './styles.css'

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


let localLists = [];
let localTasks = [];

try {
  const localLists_ = JSON.parse(localStorage.getItem("lists"));
  const localTasks_ = JSON.parse(localStorage.getItem("tasks"));

  if (Array.isArray(localLists_) && Array.isArray(localTasks_)) {
    localLists = localLists_;
    localTasks = localTasks_;
  }
} catch {

}

const App = () => {
  const [lists, setListsState] = React.useState(localLists);
  const [tasks, setTasksState] = React.useState(localTasks);

  function saveData(lists_, tasks_) {
    localStorage.setItem("lists", JSON.stringify(lists_));
    localStorage.setItem("tasks", JSON.stringify(tasks_));
  }

  function setLists(lists_) {
    setListsState(lists_);
    saveData(lists_, tasks);
  }

  function setTasks(tasks_) {
    setTasksState(tasks_);
    saveData(lists, tasks_);
  }

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
      <div className="section" >
        <div className="container">
          <div className="content" >
            <div className="lists">
              <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
            </div>
            <div className="list-page">
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
                  <p>Select your list</p>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
