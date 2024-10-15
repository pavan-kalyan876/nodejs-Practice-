const greet = require("./greet");
const person2 = require("./peoples");
console.log(person1);
console.log(person2);
greet.greet1("NodeJs");
const sum = greet.add(5, 3);
const difference = greet.subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
