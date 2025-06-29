// TODO: Output based question
const createBase = (num) => {
  return (num1) => console.log(num + num1);
};

const add6 = createBase(6);
// add6(10); // 16
// add6(31); // 37

// TODO: How "this" works in arrow vs normal functions
const prop1 = "world";
const obj = {
  prop1: "Hello",
  fn1: () => {
    console.log(this.prop1); // Window
  },
  fn2: function () {
    console.log(this.prop1, arguments); //obj
  },
};

// obj.fn1(1, 2, 3);
// obj.fn2(1, 2, 3);

// TODO: Higher order function (MAP, FILTER, REDUCE)
const members = [
  { name: "John", age: 31 },
  { name: "Dj", age: 21 },
  { name: "Doe", age: 31 },
  { name: "Maa", age: 21 },
  { name: "Abba", age: 27 },
];

// TODO: Filter Names age > 25
// const age = members.filter(({ age }) => age > 25).map(({ name }) => name);
// console.log(age);

// TODO: Reduse problem : Output = {31:2,21:2,27:1}
const accMemberAge = members.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log(accMemberAge);

// TODO: Reduse problem 2: Find max
const nums = [1, 22, 23, 2, 45, 21];
const maxNum = nums.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
}, 0);

// console.log(maxNum);

// TODO: CALL, APPLY, BIND method
const text = { txt: "Multiply is" };
function multiply(x, y) {
  console.log(this.txt, x * y);
}

// multiply.call(text, 4, 2);
// multiply.apply(this, [1, 4]);

// const multiplyBy2 = multiply.bind(text);
// multiplyBy2(2, 3);

// TODO: Tricky question on 'THIS' (Implement CALCULATOR)

const calc = {
  result: 0,
  add: function (num) {
    this.result += num;
    return this;
  },
  subtract: function (num) {
    this.result -= num;
    return this;
  },
  multiply: function (num) {
    this.result *= num;
    return this;
  },
};

const total = calc.add(3).multiply(5).subtract(2).add(42).subtract(32);
// console.log(total.result);

// TODO: CURRYING Example and benifit
const execute = (operation) => {
  return (a) => {
    return (b) => {
      operation === "SUM"
        ? console.log(a + b)
        : operation === "MULTIPLY"
        ? console.log(a * b)
        : console.log("Invalid Operation");
    };
  };
};

const multiplyByTwo = execute("MULTIPLY")(2);
const addWithFive = execute("SUM")(5);
// multiplyByTwo(3); // 6
// addWithFive(4); // 9

// TODO: Infinite Currying => sum(1)(2)(4)...(n)
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

// console.log(sum(2)(4)(13)());

// TODO: Memoize
const momoize = (fn) => {
  const memo = {};
  return function (...args) {
    const params = JSON.stringify(args);
    if (memo[params]) {
      console.log("Existing");
      return memo[params];
    } else {
      console.log("New");
      const result = fn(...args);
      memo[params] = result;
      return result;
    }
  };
};

const add = (a, b) => a + b;
const memoizeAdd = momoize(add);
// console.log(memoizeAdd(1, 3));
// console.log(memoizeAdd(2, 13));
// console.log(memoizeAdd(1, 3));
// console.log(memoizeAdd(3, 1));
// console.log(memoizeAdd(2, 13));

// TODO: Flatten the Aarray
const flattenArray = (arr, initialVal = []) => {
  const newArr = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      flattenArray(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initialVal);
  return newArr;
};

// console.log(flattenArray([1, 2, [3, 4, [5, 6], 7], 8, [9], [1, 0]]));

// TODO: Implement this | computeAmount().lakh(34).crore(12).lakh(2).thousand(2).lakh(13).value()
// computeAmount().lakh(34).value()  3400000
const computeAmount = () => {
  return {
    total: 0,
    thousand(amount) {
      this.total += amount * 1000;
      return this;
    },
    lakh(amount) {
      this.total += amount * 100000;
      return this;
    },
    crore(amount) {
      this.total += amount * 10000000;
      return this;
    },
    value() {
      return this.total;
    },
  };
};

// console.log(
//   computeAmount().lakh(34).crore(12).lakh(2).thousand(2).lakh(13).value()
// );

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

// const search = document.querySelector("#search");
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
// search.addEventListener("input", (e) => debouncedLog(e));

// TODO: ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

// ladder.up().up().down().showStep().down().showStep();

// TODO: First missing odd number in a Array

const findFirstMissingOddNumber = (arr = []) => {
  for (let i = arr[0] + 2; i < arr[arr.length - 1]; i = i + 2) {
    if (arr.indexOf(i) < 0) return i;
  }
};

// const nums = [5, 7, 11, 15, 17];
// console.log(findFirstMissingOddNumber(nums));

// Input-Output question

const input = [2, 7, 11, 4, -2];

const sumOfInput = input.reduce((sum, curr) => {
  sum += curr;
  return sum;
}, 0);

const output = input.map((num) => sumOfInput - num);

// console.log({ input, output });

// TODO: Itrate a Object

for (let item in salaries) {
  // console.log(salaries[item]);
}

// Debounce function
const searchInput = document.querySelector("#search");
const normalSearchNode = document.querySelector("#normalSearch");
const debouncedSearchNode = document.querySelector("#debouncedSearch");
const throttledSearchNode = document.querySelector("#throttledSearch");

const onInputChange = (val) => {
  normalSearchNode.textContent = val;
};
const onDebouncedInputChange = (val) => {
  debouncedSearchNode.textContent = val;
};
const onThrottledInputChange = (val) => {
  throttledSearchNode.textContent = val;
};

const debounceFunc = (func, wait) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
};
const debouncedSearch = debounceFunc(onDebouncedInputChange, 300);

const throttleFunc = (func, wait) => {
  let prevTime = 0;
  return function () {
    const currTime = Date.now();
    if (currTime - prevTime >= wait) {
      func(...arguments);
      prevTime = currTime;
    }
  };
};
const throttledSearch = throttleFunc(onThrottledInputChange, 300);

// searchInput.addEventListener("input", (e) => {
//   onInputChange(e.target.value);
//   debouncedSearch(e.target.value);
//   throttledSearch(e.target.value);
// });
