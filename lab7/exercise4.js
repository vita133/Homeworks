"use strict";
const difference = (array1, array2) => {
  let result = [];
  for (const element of array1) {
    if (!array2.includes(element)) result.push(element);
  }
  return result;
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]
