const employee = { firstName: "John", lastName: "Rodson" };
function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}
//  TODO: Polyfil for CALL
Function.prototype.myCall = function (context, ...args) {
  if (typeof this === "function") {
    context = context || window;
    context.fn = this;
    delete context.fn;
    return context.fn(...args);
  } else {
    throw new Error(`${this} is not a Callable`);
  }
};

// invite.myCall(employee, "Hello", "Good Night");

//  TODO: Polyfil for APPLY
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this === "function") {
    context.fn = this;
    context.fn(...args);
  } else {
    throw new Error(`${this} is not a Callable`);
  }
};

// invite.myApply(employee, ["Hello", "Good Night"]);

//  TODO: Polyfil for BIND
Function.prototype.myBind = function (context, ...args) {
  //   const fn = this;
  //   return function () {
  //     fn.call(context, ...args, ...arguments);
  //   };

  // FIXME: Without using CALL/APPLY
  context.fn = this;
  return function () {
    context.fn(...args, ...arguments);
  };
};

const greetEmployee = invite.myBind(employee, "Hi");
// greetEmployee("Good Morning!");

// TODO: POLYFILL for ONCE function call
function once(fn) {
  let ran;
  return function () {
    if (typeof fn === "function") {
      ran = fn.apply(this, arguments);
      fn = null;
    }
    return ran;
  };
}
const log = once(() => console.log("Hello"));
// log();
// log();
// log();

// TODO: POLYFILL for MAP
const array = [1, 3, 5, 23, 2];

Array.prototype.myMap = function (callbackFn) {
  let output = [];
  this.forEach((item, index) => {
    const val = callbackFn(item, index);
    output.push(val);
  });

  return output;
};

const newArr1 = array.map((val, i) => val * 3 * i);
const newArr2 = array.myMap((val, i) => val * 3 * i);
// console.log(newArr1, newArr2);

// TODO: POLYFILL for MAP
const arr = [1, 3, 5, 23, 2];

Array.prototype.myFilter = function (callbackFn) {
  let output = [];
  this.forEach((item, index) => {
    if (callbackFn(item, index)) output.push(item);
  });

  return output;
};

const newArr3 = array.filter((val) => val > 3);
const newArr4 = array.myFilter((val) => val > 3);
// console.log(newArr3, newArr4);

// TODO: POLYFILL for REDUCE
const arr1 = [1, 2, 4, 52, 12];
Array.prototype.myReduce = function (callbackFn, initialVal) {
  let acc = initialVal;
  //   this.forEach((item, index) => {
  //     acc = acc ? callbackFn(acc, item, index, this) : item;
  //   });
  //FIXME: Use FOR loop
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callbackFn(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const sumArr = arr1.myReduce((acc, curr) => {
  acc += curr;
  return acc;
});

const sumArr1 = arr1.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
// console.log(sumArr, sumArr1);

//TODO: Pollyfils of PROMISE

const p1 = new Promise((resolve, reject) => {
  reject("P1 Failed");
  // setTimeout(() => {
  //   resolve("P1 Passed");
  // }, 300);
});
const p2 = new Promise((resolve, reject) => {
  // resolve("P2 Success");
  setTimeout(() => {
    reject("P2 Failed");
  }, 300);
});
const p3 = new Promise((resolve, reject) => {
  // reject("P3 Failed");
  setTimeout(() => {
    resolve("P3 Passed");
  }, 500);
});

// FIXME: Promise.all
Promise.myAll = function (arr = []) {
  let counter = 0;
  return new Promise((resolve, reject) => {
    const resolveArr = [];
    arr.forEach((item, index) => {
      // This is for data type string/number
      // Promise.resolve(item)
      item
        .then((data) => {
          resolveArr[index] = data;
          counter++;
          if (counter === arr.length) resolve(resolveArr);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// FIXME: Promise.race
Promise.myRace = function (promiseArr = []) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((item) => {
      console.log(typeof item);

      item
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// FIXME: Promise.any
Promise.myAny = (promiseArr = []) => {
  return new Promise((resolve, reject) => {
    let errCount = 0;
    promiseArr.forEach((item) => {
      item
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          errCount++;
          if (errCount === promiseArr.length)
            reject("AggregateError: All promises were rejected");
        });
    });
  });
};

Promise.any([p1, p2, p3])
  .then((data) => {
    console.log("Then", data);
  })
  .catch((err) => {
    console.log("Catch", err);
  });

Promise.myAny([p1, p2, p3])
  .then((data) => {
    console.log("MyThen", data);
  })
  .catch((err) => {
    console.log("MyCatch", err);
  });
