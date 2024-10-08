import React, { useContext, useEffect, useState } from "react";
import "./toDo.css";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./toDoData";
import ThemeContext from "../../context/ThemeContext";

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);
  const [activeFilter, setActiveFilter] = useState("ALL"); // "all", "todo", "done"
  const {theme} = useContext(ThemeContext);

  useEffect(() => { 
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

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
  };


  const filterMap = {
    ALL: () => true,
    "tasks done": (task) => task.done,
    todo: (task) => !task.done,
  };

  return (
    <div className={`container-toDo container-toDo-${theme}`}>
      
      <h1>ToDo List</h1>

      <ToDoAdd addTask={addTask} />
      <ToDoFilter
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
        filterMap={filterMap}
      />

      <div className="tasks">
        {tasks.filter(filterMap[activeFilter]).map((task) => (
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
