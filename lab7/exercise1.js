"use strict";
const removeElement = (array, element) => {
  const index = array.indexOf(element);
  array.splice(index, 1);
  return array;
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
