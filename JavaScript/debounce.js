const input = document.querySelector("#search");

// const debounceFn = _.throttle(() => {
// let times = 0;
//   times++;
//   console.log(times);
// }, 2000);

// TODO: Debounce
const debounce = (fn, limit) => {
  let startTimer;

  return function () {
    clearTimeout(startTimer);
    startTimer = setTimeout(() => {
      fn().apply(this, arguments);
    }, limit);
  };
};

// TODO: Throttle
const throttle = (fn, limit) => {
  let prevTime = 0;

  return function () {
    let time = Date.now();
    if (time - prevTime >= limit) {
      prevTime = time;
      fn(...arguments);
    }
  };
};

const fnToBeCalled = (type) => console.log(type);

const debounceFn = debounce(fnToBeCalled, 300);
const debounceAltFn = debounce(fnToBeCalled, 300);
const throttleFn = throttle(fnToBeCalled, 300);

input.addEventListener("input", function () {
  debounceFn("debounce");
  debounceAltFn("debounce Alt");
  throttleFn("throttle");
});
