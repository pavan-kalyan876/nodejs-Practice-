const greet = require("./greet");
// const person2 = require("./peoples");
// console.log(person1);
const { person1, person2, person3 } = require("./peoples");
console.log(
  `first name:${person1} second name ${person2} and last name ${person3}`
);

greet.greet1("NodeJs");
const sum = greet.add(5, 3);
const difference = greet.subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
