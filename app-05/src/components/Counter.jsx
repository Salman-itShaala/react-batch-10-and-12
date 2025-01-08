import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1); // 3
  };

  return (
    <div>
      <h2>counter is {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
