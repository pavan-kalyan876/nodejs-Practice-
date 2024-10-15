const greet = require("./greet");

greet.greet1("NodeJs");
const sum = greet.add(5, 3);
const difference = greet.subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
