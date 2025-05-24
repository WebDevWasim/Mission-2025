import { FC } from "react";
import withCounter from "./withCounter";

const Counter1: FC = ({ counter, incrementCounter, text }) => {
  return (
    <div>
      {text}-{counter}
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default withCounter(Counter1, 5);
