import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(1);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const onDecrease = () => {
    if(count > 1 ){
      setCount((prev) => prev - 1);
    }
  };

  const onReset = () => {
    setCount(1);
  };

  return { count, onDecrease, onIncrease, onReset };
}

export default useCount;
