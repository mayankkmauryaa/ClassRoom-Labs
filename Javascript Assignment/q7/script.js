// Restaurant Billing with Tips
// Purpose: Calculate full restaurant bill with taxes and tip.

let baseCost = 2500;
let isDiningIn = true;

let gst = baseCost * 0.05;
let serviceTax = isDiningIn ? baseCost * 0.10 : 0;

let total = baseCost + gst + serviceTax;

// Tip logic
let tip = total > 2000 ? total * 0.08 : 0;
let finalTotal = total + tip;

console.log("=== Billing Summary ===");
console.log("Base Amount: ₹" + baseCost);
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax:", isDiningIn ? "₹" + serviceTax.toFixed(2) : "N/A");
console.log("Tip: ₹" + tip.toFixed(2));
console.log("Final Total: ₹" + finalTotal.toFixed(2));
