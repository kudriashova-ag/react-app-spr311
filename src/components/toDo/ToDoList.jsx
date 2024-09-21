import React, { useState } from "react";
import "./toDo.css";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./toDoData";

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title: title, done: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    });
    setTasks(newTasks);
  };

  const updateTask = (id, title) => { 
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="container-toDo">
      <h1>ToDo List</h1>

      <ToDoAdd addTask={addTask} />
      <ToDoFilter />

      <div className="tasks">
        {tasks.map((task) => (
          <ToDoItem
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
