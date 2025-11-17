// Math Utility Dashboard
// Purpose: Show various math operations and formatted results.

let x = 16.75;
let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10; // Random 10–50

console.log("=== Math Utility Dashboard ===");
console.log(`Number: ${x}
Rounded: ${rounded}
Square Root: ${sqrt.toFixed(2)}
Power (x^3): ${power.toFixed(2)}
Random Number (10–50): ${randomNum}`);
