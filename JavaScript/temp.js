const throttle = (cbFn, delay) => {
  let prevTime = 0;
  return function () {
    const currTime = Date.now();
    if (currTime - prevTime >= delay) {
      cbFn(...arguments);
      prevTime = currTime;
    }
  };
};

const log = (world) => console.log("Hello", world);
const debouncedLog = throttle(log, 300);

debouncedLog("First World");
debouncedLog("World");
debouncedLog("World");
debouncedLog("World");
