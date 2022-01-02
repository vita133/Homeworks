"use strict";

const fn = () => {
  const obj1 = { name: "Vita" }; //1
  let obj2 = { name: "Sergey" }; //2

  obj1.name = "Oleg"; //3
  obj2.name = "Martuniuk"; //3

  obj2 = { name: "Oleg Martuniuk" };
};

fn();

const createUser = (name, city) => {
  const obj = {};
  obj.name = name;
  obj.city = city;
  return obj;
};

console.log(createUser("Marcus Aurelius", "Roma"));
