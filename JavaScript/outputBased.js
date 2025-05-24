// TODO: Output 1
const arr = ["a", "b", 5];
const obj = { ...arr };
// console.log({ obj }); {0:"a",1:"b", 2:5}

// TODO: Promise output

const promise = new Promise((res) => res(2));

promise
  .then((num1) => {
    // console.log({ num1 }); // 2
    return num1 * 2;
  })
  .then((num2) => {
    // console.log({ num2 }); // 4
    return num2 * 2;
  })
  .finally((num3) => {
    // console.log({ num3 }); // undefined
    return 0;
  })
  .finally((num5) => {
    // console.log({ num5 }); // undefined
  })
  .then((num4) => {
    // console.log({ num4 }); // 8
  });

// TODO: FOR IN and FOR OF
const arr1 = [3, 4, 5];
arr1.foo = "Hi";
// console.log({ arr1 }); // { arr1: [ 3, 4, 5, foo: 'Hi' ] }

for (let num of arr1) {
  //   console.log(num); // 3,4,5
}

for (let num in arr1) {
  //   console.log(num); //0,1,2,foo
}

// TODO: setTimeout output

function delay() {
  setTimeout(() => {
    console.log(x); // 10
  }, 0);
  var x = 10;
}

// delay();

TODO: function step1(cb) {
  console.log("Step 1");
  cb();
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2");
    cb(); //console.log("Step 3");//console.log("Done");
  }, 50);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3");
    cb(); //console.log("Done");
  }, 10);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Done");
    });
  });
});

// Step 1
// Step 2
// Step 3
// Done
