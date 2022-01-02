"use strict";

const Emitter = require("events");
const emitter = new Emitter();

const compose =
  (...fns) =>
  (x) => {
    let errors = [];
    try {
      let result = fns.reverse().reduce((v, f) => f(v), x);
      return result;
    } catch (error) {
      errors.push(error);
      emitter.emit("errors", errors);
    }
  };

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = compose(inc, 6, twice);

emitter.on("errors", (e) => {
  console.log(e);
});

const x = f(7);
console.log(x);
