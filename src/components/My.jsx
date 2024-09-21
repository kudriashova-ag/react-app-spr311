import React, { useState } from "react";

const My = () => {

  // стан компонента, ф-ція зміни стану .
  // При зміні стану компонент оновлюється
  const [counter, setCounter] = useState(5);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    setVisible(!true);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
      <hr />

      <button onClick={toggleVisible}>Show</button>
      {visible && <div>Lorem ipsum dolor sit.</div>}
    </div>
  );
};

export default My;
