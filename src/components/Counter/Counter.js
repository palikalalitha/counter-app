// src/components/Counter.js

import React, { useState } from 'react';
import './Counter.css';  // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
