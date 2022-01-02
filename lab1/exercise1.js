"use strict";

const fn = () => {
  a = 5;
  console.log(a); // 5
  var a;
  //console.log(b); //Cannot access 'b' before initialization
  //let b = 2;
};
fn();
