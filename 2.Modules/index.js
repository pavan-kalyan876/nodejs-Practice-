const greet = require("./greet"); // Importing the module

const sum = greet.add(5, 3); // Using the add function
const difference = greet.subtract(5, 3); // Using the subtract function

// Improved output formatting
console.log(`Sum: ${sum}`); // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 2
