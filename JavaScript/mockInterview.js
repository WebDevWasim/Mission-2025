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

// TODO: Two way data binding
const input = document.createElement("input");
const state = { value: "abc" };

// const model = (input, state) => {
//   Object.defineProperty(state);
// };

// console.log({ state: state.value, input: input.value });
// model(input, state);

// input.value = "Dev";
// console.log({ state: state.value, input: input.value });
