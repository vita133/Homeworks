"use strict";

const average = (...args) => {
  let Sum = 0;
  for (const i of args) {
    Sum += i;
  }
  return Sum;
};
const square = (x) => x * x;

const cube = (x) => x * x * x;

console.log(average(1, 2, 3, 4, 5));
console.log(square(2));
console.log(cube(2));

const calculate = () => {
  let mass = [];
  for (let i = 0; i < 9; i++) {
    mass[i] = square(i) + cube(i);
  }
  return mass;
};
console.log(calculate());
