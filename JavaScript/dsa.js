// TODO: Remove Duplicates from array
const removeDuplicates = (arr = []) => {
  let i = 0;
  while (i < arr.length) {
    if (arr.indexOf(arr[i]) === i) {
      i++;
    } else {
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(removeDuplicates([1, 1, 2, 3, 2, 3, 4, 5]));

// TODO: 1) Balanced Brackets
function isBalancedBrackets(str) {
  const strArr = str.split("");
  const openingBacketsMapping = { "(": ")", "{": "}", "[": "]" };
  const openingBackets = Object.keys(openingBacketsMapping);
  const stack = [];

  for (let item of strArr) {
    if (openingBackets.includes(item)) {
      stack.push(item);
    } else {
      if (stack.length === 0) return false;
      if (openingBacketsMapping[stack[stack.length - 1]] === item) {
        stack.pop(item);
      }
    }
  }
  return stack.length === 0;
}
// console.log(isBalancedBrackets("([]){}"));

// TODO: 2) Is Duplicates in Array
function isDuplicatesInArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i !== numbers.indexOf(numbers[i])) {
      return true;
    }
  }
  return false;
}
// console.log(isDuplicatesInArray([1,2,4,2,3]));

// TODO: 3) Find Missing Number in Sequence [0,...,n]
function findMissingNumberInSequence(numbers = []) {
  const maxNum = numbers.length;
  const sum = (maxNum * (maxNum + 1)) / 2;
  const currentSum = numbers.reduce((acc, curr) => (acc += curr), 0);
  return sum - currentSum;
}

// console.log(findMissingNumberInSequence([0, 1, 2, 4, 5]));
// console.log(findMissingNumberInSequence([1]));
// console.log(findMissingNumberInSequence([3, 0, 4, 2, 1]));

// TODO: 4) Maximum Product in Contiguous Array
function maxProductSubArray(numbers) {
  // [[1],[1,-3], [1,-3,5], [-3], [-3,5], [5]]
  let maxProduct = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      const total = numbers
        .slice(i, j + 1)
        .reduce((sum, num) => (sum *= num), 1);
      maxProduct = total > maxProduct ? total : maxProduct;
    }
  }

  return maxProduct;
}

// console.log(maxProductSubArray([1, -3, 5]));

// TODO: 5) Most Common Elements
// Input: numbers = [4,4,4,6,6,5,5,5], k = 2
// Output: [4,5]
// Explanation: The two most frequent numbers are 4 and 5, as they appear the most often in the array.

function mostCommonElements(numbers, k) {
  const commonElementsMapping = numbers.reduce((mappedObj, curr) => {
    if (mappedObj[curr]) {
      mappedObj[curr]++;
    } else {
      mappedObj = { ...mappedObj, [curr]: 1 };
    }
    return mappedObj;
  }, {});

  const sortedMappedElements = Object.entries(commonElementsMapping)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
  return sortedMappedElements;
}

// console.log(mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2));

// TODO: 6) Reverse array of Items
function reverseArrayOfItems(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}

// console.log(reverseArrayOfItems([1, 2, 3, 4, 5]));

// TODO: Array Product Excluding Current
// Input: numbers = [2,0,3]
// Output: [0,6,0]
// Explanation: Output is multiplication of all other elements except self, i.e 0*3, 2*3, 2*0

function arrayProductExcludingCurrent(numbers) {
  const productArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let total = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        total *= numbers[j];
      }
    }
    productArr.push(total);
  }
  return productArr;
}

// console.log(arrayProductExcludingCurrent([0, 0, -1, 1]));
