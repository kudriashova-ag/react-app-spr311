import React, { useState } from "react";
import "./toDo.css";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./toDoData";

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([...tasks, { id: 4, title: title, done: false }]);
  };
    
  return (
    <div className="container-toDo">
      <h1>ToDo List</h1>

      <ToDoAdd addTask={addTask} />
      <ToDoFilter />

        <div className="tasks">
        {tasks.map((task) => (
            <ToDoItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
