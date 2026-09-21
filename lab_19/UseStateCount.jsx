import React, { useState } from "react";

function UseStateCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <button onClick={() => setCount(0)}>Restart</button>
    </div>
  );
}

export default UseStateCount;
