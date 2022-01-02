"use strict";

const pipe =
  (...fns) =>
  (x) => {
    for (const funct of fns) {
      if (typeof funct !== "function") {
        throw new Error("not function");
      }
    }
    let result = fns.reduce((v, f) => f(v), x);
    return result;
  };

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, cube, twice);
const x = f(7);
console.log(x);
