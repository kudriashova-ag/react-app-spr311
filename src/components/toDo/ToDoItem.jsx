import React, { useState } from "react";

const ToDoItem = ({ task, deleteTask, toggleDone, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveTask = () => {
    setIsEdit(false);
    updateTask(task.id, title);
  };

  const normalTemplate = (
    <div>
      <input
        type="checkbox"
        defaultChecked={task.done}
        onChange={() => toggleDone(task.id)}
      />
      <span onClick={() => setIsEdit(true)}>
        {" "}
        {task.done ? <del>{task.title}</del> : task.title}{" "}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );

  const editTemplate = (
    <div>
      <input type="checkbox" defaultChecked={task.done} disabled />
      <span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={saveTask}
        />
      </span>
    </div>
  );

  return <>{isEdit ? editTemplate : normalTemplate}</>;
};

export default ToDoItem;
