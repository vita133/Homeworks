"use strict";
const phonebook = [
  { name: "Sergey", phone: "+380558822669" },
  { name: "Timur", phone: "+380663682972" },
  { name: "Vita", phone: "+3808434389741" },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};
console.log(findPhoneByName("Sergey"));

const phonebook2 = {
  Vita: "+380483744827",
  Timur: "+380603843028",
  Ivan: "+380057294681",
  Sergey: "+38038472947",
};

const findPhoneByName2 = (name) => phonebook2[name];

console.log(findPhoneByName2("Vita"));
