import React, { useState } from "react";
import "./CounterApp.css";

function CounterApp(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="wrapper-aciton">
      <p>{count}</p>
      <div className="action">
        <button id="decre" onClick={decrement}>
          <i class="fa-solid fa-minus"></i>
        </button>
        <button id="reset" onClick={reset}>
          <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button id="incre" onClick={increment}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
