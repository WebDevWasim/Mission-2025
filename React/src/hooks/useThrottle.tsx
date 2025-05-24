import { useState, useEffect, useRef } from "react";

const useThrottle = (value, delay = 400) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const prevTime = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTime = Date.now();
      if (currentTime - prevTime.current >= delay) {
        setThrottledValue(value);
        prevTime.current = currentTime;
      }
    }, delay - (Date.now() - prevTime.current));

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
