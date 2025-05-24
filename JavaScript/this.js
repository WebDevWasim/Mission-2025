// TODO: THIS Keyword
// 1. Global Context

// console.log(this); // Window Object

// 2. Function Context
function showThis() {
  console.log(this); // Window Object
}

function showStrictThis() {
  "use strict";
  console.log(this);
}
// showThis();
// showStrictThis(); // undefined
// window.showStrictThis(); // Window Object

// 6. Arrow Function Context
const showThisArrow = () => {
  console.log(this); // Window Object
};
// showThisArrow();

// 3. Method Context
const person = {
  name: "John",
  show: function () {
    console.log(this); // person Object
  },
};
// person.show();

// 7. Callback Function Context
const arr = [1, 2, 3];
arr.forEach(function () {
  //   console.log(this); // Window Object
});

// 8. Bind, Call, Apply
const person3 = {
  name: "John",
  show: function () {
    console.log(this); // person Object
  },
};
const person4 = { name: "Doe" };
// person3.show.call(person4);

// 9. Nested Function Context
const person5 = {
  name: "John",
  show: function () {
    console.log(this); // person Object

    const nested = () => {
      console.log(this); // person Object
      (function () {
        console.log(this); // Window Object
      })();
    };
    nested();
  },
};
// person5.show();

// TODO: Output based question
var age = 29;
const person1 = {
  age: 21,
  getAge: function () {
    console.log(this.age); // 25

    // Nested normal Function
    (function () {
      console.log(this.age); // 29
      (function () {
        console.log(this.age); // 29
      })();
    })();

    // Nested Arrow Function
    (() => {
      console.log(this.age); // 25
      (() => {
        console.log(this.age); // 25
      })();
      (function () {
        console.log(this.age); // 29
      })();
    })();
  },
};
const person2 = { age: 25 };
person1.getAge.call(person2);
