import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
    <h1>Counter</h1>
    <div className="counter-value">{count}</div>
    <div className="buttons-container">
      <button id="decrement-btn" onClick={() => setCount(count - 1)}>
        decrease
      </button>
      <button id="reset-btn" onClick={() => setCount(0)}>
        reset
      </button>
      <button id="increment-btn" onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  </div>
  )
};  

export default App;
