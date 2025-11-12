// Banking Interest Calculator
// Purpose: Compute compound interest based on account type, amount, and duration.

let accountType = "Fixed Deposit"; // or "Savings"
let amount = 120000;
let years = 3;

let rate = accountType === "Fixed Deposit" ? 6.5 : 4.0;

// Extra 1% bonus for large deposits
if (amount > 100000) {
  rate += 1;
}

let total = amount * Math.pow(1 + rate / 100, years);

console.log("=== Banking Interest Summary ===");
console.log("Account Type:", accountType);
console.log("Principal Amount: ₹" + amount);
console.log("Interest Rate:", rate + "%");
console.log("Duration:", years, "years");
console.log("Final Balance: ₹" + total.toFixed(2));
