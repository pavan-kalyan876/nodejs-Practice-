// math.js (ES6 module)
export function greet(name) {
  return `Hello, ${name}`;
}

export function add(a, b) {
  return a + b;
}

// Export an object with greet and add functions
export default { greet, add };
