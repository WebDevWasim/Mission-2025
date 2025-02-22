let num = 0;
function random() {
  if (num === 0) {
    let num = 1;
    console.log(num);
  }
  console.log(num);
}
// console.log(num);
// random();

// TODO: SUM of object values
const sumSalaries = (salaries) => {
  let totalSalary = 0;
  Object.values(salaries).forEach((salary) => {
    console.log(salary);
  });
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// sumSalaries(salaries);
// console.log(undefined && null);

// TODO: Order the array with top priority | SORT

const defects = [
  { priority: 1, timestamp: 1234, description: "Abcd" },
  { priority: 2, timestamp: 1214, description: "Efgh" },
  { priority: 1, timestamp: 1144, description: "IJkl" },
  { priority: 3, timestamp: 1212, description: "MNOP" },
];

const sortedDefects = defects.sort((a, b) => {
  return a.priority - b.priority || a.timestamp - b.timestamp;
});

// console.log(sortedDefects);

// TODO: Debounce function

const search = document.querySelector("#search");
// search.addEventListener("input", (e) =>
//   console.log("Normal :" + e.target.value)
// );

const debounce = (func, wait) => {
  let prevTime;
  return (...arg) => {
    const now = Date.now();
    if (prevTime && now - prevTime >= wait) {
      func(...arg);
      prevTime = now;
    } else {
      prevTime = now;
    }
  };
};
const throttle = (func, wait) => {
  let prevTime = 0;

  return function () {
    const now = Date.now();
    if (now - prevTime >= wait) {
      func(...arguments);
      prevTime = now;
    }
  };
};

const log = (e) => console.log("Debounce :" + e.target.value);
const debouncedLog = debounce(log, 300);
search.addEventListener("input", (e) => debouncedLog(e));
