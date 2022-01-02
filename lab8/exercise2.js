"use strict";
const store = (value) => {
  const date = value;
  return () => date;
};
const read = store(5);
const value = read();
console.log(value); // Output: 5
