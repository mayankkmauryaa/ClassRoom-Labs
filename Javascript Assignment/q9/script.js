// Library Fine Calculator
// Purpose: Calculate total fine for multiple late book returns.

let delays = [3, 7, 12, 5]; // days delayed for each book
let totalFine = 0;

for (let d of delays) {
  if (d <= 5) totalFine += d * 10;
  else if (d <= 10) totalFine += d * 20;
  else totalFine += d * 50;
}

// Additional penalty for more than 3 late books
if (delays.length > 3) totalFine += 200;

console.log("=== Library Fine Summary ===");
console.log("Delays (days):", delays);
console.log("Number of Books:", delays.length);
console.log("Total Fine: ₹" + totalFine);
