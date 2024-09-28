import React, { useCallback, useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";
import Button from "./Button";

const Counters = () => {
//   console.log("Counters rerendered");

  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

    const increment = useCallback(() => {
        setCounter1(counter1 + 1);
    }, [counter1]);
    
  return (
    <div>
      <Button increment={increment} />
      <Count value={counter1} id="1" />
      <button onClick={() => setCounter1(counter1 - 1)}>-</button>

      <hr />

      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      <Count value={counter2} id="2" />
      <button onClick={() => setCounter2(counter2 - 1)}>-</button>
      <IsFive value={counter2} />
    </div>
  );
};

export default Counters;
