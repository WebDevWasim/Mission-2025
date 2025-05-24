import { useState } from "react";

const withCounter = (
  WrappedComponent: React.ComponentType,
  increamentBy = 1
) => {
  return (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter((prev) => prev + increamentBy);
    };
    return (
      <WrappedComponent
        counter={counter}
        incrementCounter={incrementCounter}
        {...props}
      />
    );
  };
};

export default withCounter;
