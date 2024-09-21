import React, { useState } from "react";

const ToDoAdd = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const addItemHandler = () => {
    if (title.trim() === "") {
      setTitleError(true);
      return;
    }
    addTask(title);
    setTitle("");
    setTitleError(false);
  };

  return (
    <div>
      <input type="text" value={title} onChange={changeHandler} onKeyDown={(e) => e.key === "Enter" && addItemHandler()} />
      <button onClick={addItemHandler}>Add</button>
      {titleError && <div style={{ color: "red", fontSize: "0.9em" }}>Title is required</div>}
    </div>
  );
};

export default ToDoAdd;
