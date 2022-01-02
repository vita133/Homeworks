"use strict";
const removeElements = (array, ...elements) => {
  for (const element of elements) {
    const index = array.indexOf(element);
    if (index !== -1) array.splice(index, 1);
  }
  return array;
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
