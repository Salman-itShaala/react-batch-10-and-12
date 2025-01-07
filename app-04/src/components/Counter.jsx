import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // mount and update

    // unmount
    return () => {
      // disconnect
    };
  }, [count2]);

  const increseCount1 = () => {
    setCount1(count1 + 1);
  };

  const increseCount2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h3>Count 1 is {count1}</h3>
      <h3>Count 2 is {count2}</h3>

      <button onClick={increseCount1}>Update the count</button>
      <button onClick={increseCount2}>Update the count</button>
    </div>
  );
};

export default Counter;
