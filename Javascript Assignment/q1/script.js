// =============================================================
//  E-COMMERCE DELIVERY ESTIMATOR
//  Purpose: Estimate total order cost and delivery time
// =============================================================

// --- Input Variables ---
let orderAmount = 400;       // Example: ₹400 order
let isPremium = false;       // true if user is a premium member
let isRemote = true;         // true if address is remote

// --- Constants ---
const DELIVERY_FEE = 50;     // ₹50 delivery charge if applicable
const BASE_DELIVERY_DAYS = 3; // Standard delivery time in days
const REMOTE_EXTRA_DAYS = 2; // Additional days for remote areas

// --- Logic for Delivery Fee ---
// Rule: If order < ₹500, add ₹50 fee unless user is premium
let deliveryFee = 0;

if (!isPremium && orderAmount < 500) {
    deliveryFee = DELIVERY_FEE;
    console.log("Delivery fee of ₹50 applied (order below ₹500 and not premium).");
} else {
    console.log("No delivery fee applied (either premium user or order ≥ ₹500).");
}

// --- Logic for Delivery Time ---
// Base 3 days, add 2 more if address is remote
let deliveryDays = BASE_DELIVERY_DAYS;
if (isRemote) {
    deliveryDays += REMOTE_EXTRA_DAYS;
    console.log("Remote area detected: +2 days added to delivery time.");
}

// --- Total Cost Calculation ---
let totalCost = orderAmount + deliveryFee;

// --- Final Output ---
console.log("======================================");
console.log("🛒 E-Commerce Delivery Summary");
console.log("--------------------------------------");
console.log(`Order Amount       : ₹${orderAmount}`);
console.log(`Premium Member     : ${isPremium ? "Yes" : "No"}`);
console.log(`Remote Address     : ${isRemote ? "Yes" : "No"}`);
console.log(`Delivery Fee       : ₹${deliveryFee}`);
console.log(`Total Cost         : ₹${totalCost}`);
console.log(`Estimated Delivery : ${deliveryDays} days`);
console.log("======================================");
