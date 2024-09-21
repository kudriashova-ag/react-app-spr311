import React from 'react';

const ToDoAdd = () => {
  const addItemHandler = () => {
    alert("Added");
  }

    return (
      <div>
        <input type="text" />
        <button onClick={addItemHandler}>Add</button>
      </div>
    );
}

export default ToDoAdd;
