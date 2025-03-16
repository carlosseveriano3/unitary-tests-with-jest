import { useState } from "react";

import "./index.css"

type CounterProps = {
  initialCount : number
}

export function Counter({ initialCount } : CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="container">
      <h1 className="count">
        Count: <p data-testid="count">{count}</p>
      </h1>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  )
}