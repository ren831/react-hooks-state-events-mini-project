import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const taskArray = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        handleDelete={handleDelete}
      />
    );
  });

  return <div className="tasks">{taskArray}</div>;
}

export default TaskList;
