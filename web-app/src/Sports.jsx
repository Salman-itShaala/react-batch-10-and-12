// rafce
import React from "react";

const Sports = ({ sports }) => {
  // {sports: []}

  // condtional rendering
  if (!sports) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        {sports.length === 0 ? (
          <li>No element in sports array</li>
        ) : (
          sports.map((sport) => {
            return <li>{sport}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default Sports;
