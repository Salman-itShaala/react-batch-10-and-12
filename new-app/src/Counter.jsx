import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function hadnleButtonClick() {
    setCounter(counter + 2);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={hadnleButtonClick}>Increase counter</button>
      <button onClick={() => hadnleButtonClick()}>Increase counter</button>
    </div>
  );
};

export default Counter;
