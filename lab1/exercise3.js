"use strict";
const a = { number: 5 };
const inc = (obj) => {
  obj["number"]++;
  return obj;
};
const b = inc(a);
console.dir({ b });
