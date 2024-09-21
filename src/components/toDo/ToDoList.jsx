import React from "react";
import "./toDo.css";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./toDoData";

const ToDoList = () => {
    
  return (
    <div className="container-toDo">
      <h1>ToDo List</h1>

      <ToDoAdd />
      <ToDoFilter />

        <div className="tasks">
        {list.map((task) => (
            <ToDoItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
