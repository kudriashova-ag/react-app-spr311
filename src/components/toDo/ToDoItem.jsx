import React from "react";

const ToDoItem = ({ task }) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={task.done} />
      <span> {task.done ? <del>{task.title}</del> : task.title} </span>
      <button>Delete</button>
    </div>
  );
};

export default ToDoItem;
