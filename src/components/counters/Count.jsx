import React, { memo } from "react";

const counters = {
    value1: 0,
    value2: 0
}
const Count = ({ value, id }) => {
//    console.log(`Count ${id} rerendered, ${++counters[`value${id}`]}`);
    
  return <strong>{value}</strong>;
};

export default memo(Count);
