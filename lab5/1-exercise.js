"usr strict";
const seq = (f) => (g) => typeof g === "number" ? f(g) : seq((x) => f(g(x))); // создаем сложную функцию f(g(x)) с передаваемыми параметрами-функциями f и g

let a = seq((x) => x + 7)((x) => x * 2)((x) => x - 1)(5); // вместо f  х = х + 7; вместо g х = 2 * х;  вместо х подставили 5 выведет  f(g)
console.log(a);
