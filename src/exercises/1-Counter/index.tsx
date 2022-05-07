/**
 * 1. Counter
 *
 * My counter component is not working.
 * Every second, I want to increment by one the count variable.
 */

import { useEffect, useState } from "react";

const Counter = () => {
  let [count, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(count = count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <h1>My Counter 1</h1>
      <pre>{count}</pre>
    </div>
  );
};

export default Counter;
