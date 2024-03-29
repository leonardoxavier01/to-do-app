import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lists from "./components/Lists";
import ListPage from "./pages/ListPage";
import { CgPlayListAdd } from "react-icons/cg"
import { AppStyled, ConatinerApp, ListsStyled, ListPageStyled } from "./AppStyles"

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

  const saveData = (lists_, tasks_) => {
    localStorage.setItem("lists", JSON.stringify(lists_));
    localStorage.setItem("tasks", JSON.stringify(tasks_));
  }

  const setLists = (lists_) => {
    setListsState(lists_);
    saveData(lists_, tasks);
  }

  const setTasks = (tasks_) => {
    setTasksState(tasks_);
    saveData(lists, tasks_);
  }

  const addList = (list) => {
    setLists([...lists, list]);
  }

  const editList = (newList) => {
    const tempLists = lists.slice();
    const index = tempLists.findIndex((list) => list.id === newList.id);
    Object.assign(tempLists[index], newList);
    setLists(tempLists);
  }

  const removeList = (id) => {
    const tempLists = lists.slice();
    const index = tempLists.findIndex((list) => list.id === id);
    tempLists.splice(index, 1);
    setLists(tempLists);
  }

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const editTask = (newTask) => {
    const tempTasks = tasks.slice();
    const index = tempTasks.findIndex((task) => task.id === newTask.id);
    Object.assign(tempTasks[index], newTask);
    setTasks(tempTasks);
  }

  const removeTask = (id) => {
    const tempTasks = tasks.slice();
    const index = tempTasks.findIndex((task) => task.id === id);
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  let inputFirstList;
  if (lists.length < 1) {
    inputFirstList =
      <div>
        <h1>Create your list <CgPlayListAdd color={"#1a8a52"} /></h1>
        <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
      </div>;
  } else {
    inputFirstList = <h1>Select your list</h1>
  }

  return (
    <Router>
      <AppStyled >
        <ConatinerApp>
          <ListsStyled>
            <Lists data={lists} onAddList={addList} onRemoveList={removeList} />
          </ListsStyled>
          <ListPageStyled>
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
                {inputFirstList}
              </Route>
            </Switch>
          </ListPageStyled>
        </ConatinerApp>
      </AppStyled>
    </Router>
  );
}

export default App;
