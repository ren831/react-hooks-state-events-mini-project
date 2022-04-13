import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [categoryList, setCategoryList] = useState("All");
  const [categoryTasks, setCategoryTasks] = useState(taskList);

  function handleDelete(deletedTask) {
    let tempList = taskList.filter((task) => {
      if (task.text !== deletedTask) return true;
    });
    setTaskList(tempList);
    if (categoryList == "All") {
      setCategoryTasks(tempList);
    } else {
      let filteredByCat = tempList.filter((task) => {
        if (task.category == categoryList) return true;
      });
      setCategoryTasks(filteredByCat);
    }
  }

  function handleFilter(event) {
    setCategoryList(event.target.value);
    if (event.target.value == "All") {
      setCategoryTasks(taskList);
    } else {
      let categoryList = taskList.filter((task) => {
        if (task.category == event.target.value) return true;
      });
      setCategoryTasks(categoryList);
    }
  }

  const categoriesToDisplay = CATEGORIES.filter((category) => {
    if (categoryList === "All") {
      return true;
    } else {
      return category === categoryList;
    }
  });

  function onTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask]);
    if (categoryList == "All") {
      setCategoryTasks([...taskList, newTask]);
    } else {
      let filteredByCat = [...taskList, newTask].filter((task) => {
        if (task.category == categoryList) return true;
      });
      setCategoryTasks(filteredByCat);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        handleFilter={handleFilter}
        categoryList={categoryList}
        categories={CATEGORIES}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList handleDelete={handleDelete} tasks={categoryTasks} />
    </div>
  );
}

export default App;
