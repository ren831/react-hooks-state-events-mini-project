import React from "react";

function Task({ text, category, handleDelete }) {
  function lastDelete() {
    handleDelete(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={lastDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
