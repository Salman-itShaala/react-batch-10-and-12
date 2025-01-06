import React, { useState } from "react";

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
          labore.
        </p>
      )}
    </div>
  );
};

export default ToggleVisibility;
