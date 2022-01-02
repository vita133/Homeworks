"use strict";
const array = [1, true, "string", 44, null, "-1", false, 12];
const colection = {};
const countType = (arr) => {
  for (const element of array) {
    let key = typeof element;
    let count = colection[key] || 0;
    colection[key] = count + 1;
  }
  return colection;
};
console.dir(countType(array));
