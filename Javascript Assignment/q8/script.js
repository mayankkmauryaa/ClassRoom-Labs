// Employee Bonus Distribution
// Purpose: Calculate employee bonuses with caps and conditions.

let baseSalary = 120000;
let rating = 4;
let experience = 6;

let bonusPercent = 0;

if (rating === 5) bonusPercent = 20;
else if (rating === 4) bonusPercent = 15;
else if (rating === 3) bonusPercent = 10;

// Add experience bonus
if (experience > 5) bonusPercent += 5;

let bonus = (baseSalary * bonusPercent) / 100;

// Apply cap
if (baseSalary > 100000 && bonus > 25000) bonus = 25000;

let totalSalary = baseSalary + bonus;

console.log("=== Bonus Distribution ===");
console.log("Base Salary: ₹" + baseSalary);
console.log("Rating:", rating);
console.log("Experience:", experience, "years");
console.log("Bonus: ₹" + bonus);
console.log("Total Salary After Bonus: ₹" + totalSalary);
