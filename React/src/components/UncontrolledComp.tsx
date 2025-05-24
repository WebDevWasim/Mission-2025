import { useEffect, useRef } from "react";

const UncontrolledComp = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UncontrolledComp;
