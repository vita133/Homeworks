"use strict";
const iterate = (obj, callback) => {
  for (const key in obj) {
    callback(key, obj[key]);
  }
};
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const callback1 = (key, value) => {
  console.dir({ key, value });
};
iterate(obj1, callback1);
