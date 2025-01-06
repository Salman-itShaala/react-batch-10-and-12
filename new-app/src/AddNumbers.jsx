import React, { useState } from "react";

const AddNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  function addNumbers() {
    // "1" + "1" => 11
    const result = parseFloat(num1) + parseFloat(num2);
    setSum(result);
  }

  return (
    <div>
      <h1>
        Sum of {num1} and {num2} is {sum}
      </h1>
      <input
        type="number"
        placeholder="Enter number1"
        onChange={(event) => setNum1(event.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number2"
        onChange={(event) => setNum2(event.target.value)}
      />

      <button onClick={addNumbers}>Caclulate sum</button>
    </div>
  );
};

export default AddNumbers;
