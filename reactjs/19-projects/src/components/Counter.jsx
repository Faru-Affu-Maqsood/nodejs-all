import { useState } from "react";
import "../style-counter.css";
import { Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      alert("No more decrement is possible");
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <Fragment className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>

      <div className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
