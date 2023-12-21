import { useState } from "react";

export default function Team() {
  const [count, setCount] = useState(11);
  const countHandler = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  const removeHandler = () => {
    setCount(count - 1)
  }

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player: {count}</h3>
      <button onClick={countHandler}>Add</button>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
}
