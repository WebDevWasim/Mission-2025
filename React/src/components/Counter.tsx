import { useState, useEffect, useCallback, memo } from "react";

type ChildProps = {
  increment: () => void;
};

const Child = ({ increment }: ChildProps) => {
  console.log("Child Rendered");

  return <button onClick={increment}>Increment</button>;
};

const ChildCom = memo(Child);

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const incrementCount1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, [count1]);

  return (
    <div>
      <p>count = {count}</p>
      <p>count = {count1}</p>

      <ChildCom increment={incrementCount} />
      <button onClick={incrementCount1}>Increment 1</button>
    </div>
  );
};

export default Counter;
