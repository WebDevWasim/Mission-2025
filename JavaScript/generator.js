// TODO: Generator function
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const x = generatorFn();
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

//TODO: Example 1
function* generateId() {
  let id = 0;

  while (true) {
    yield id;
    id++;
  }
}

const generatedId = generateId();
// console.log(generatedId.next());
// console.log(generatedId.next());
// console.log(generatedId.next());
// console.log(generatedId.next());
// console.log(generatedId.next());

//TODO: Example 2: Array Itrator
function* arrItretor(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      yield arr[i];
    } else {
      return arr[i];
    }
  }
}

const itrateArray = arrItretor([1, 23, 43, 12]);
console.log(itrateArray.next());
console.log(itrateArray.next());
console.log(itrateArray.next());
console.log(itrateArray.next());
