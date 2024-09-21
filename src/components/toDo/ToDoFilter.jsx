import React from "react";

const ToDoFilter = ({ setActiveFilter, activeFilter, filterMap }) => {
  const filters = Object.keys(filterMap); // ["all", "todo", "done"]

  return (
    <div>
      {filters.map((filter) => (
        <button
          onClick={() => setActiveFilter(filter)}
          className={activeFilter === filter ? "active" : ""}
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ToDoFilter;
