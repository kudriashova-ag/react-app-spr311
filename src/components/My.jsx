import React, { useEffect, useState } from "react";

const My = () => {
  // стан компонента, ф-ція зміни стану .
  // При зміні стану компонент оновлюється
  const [counter, setCounter] = useState(5);
  const [visible, setVisible] = useState(true);

  // ф-ція, виконується кожного разу при оновленні компоненту
  // [] - залежності, то ф-ція буде виконуватися лише один раз
  // [counter] - залежності, то ф-ція буде виконуватися при зміні counter
  useEffect(() => { 
   // console.log("useEffect");
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>

      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
      <hr />

      <button onClick={toggleVisible}>Show</button>
      {visible && <div>Lorem ipsum dolor sit.</div>}

      <ol className="users">
        <li>Lorem, ipsum.</li>
        <li>Tenetur, eos?</li>
        <li>Consectetur, cupiditate?</li>
        <li>Veritatis, molestiae.</li>
        <li>Corporis, error.</li>
      </ol>
    </div>
  );
};

export default My;
