// E-Commerce Delivery Estimator
// Purpose: Calculate total cost and delivery time based on order value, membership, and address type.

let orderAmount = 450;
let isPremium = false;
let isRemote = true;

let deliveryFee = 0;
let deliveryDays = 3; // Normal delivery

// Apply delivery fee rules
if (orderAmount < 500 && !isPremium) {
    deliveryFee = 50;
}

// Add extra delivery days for remote locations
if (isRemote) {
    deliveryDays += 2;
}

let totalCost = orderAmount + deliveryFee;

console.log("=== Delivery Estimator Summary ===");
console.log("Base Order Amount: ₹" + orderAmount);
console.log("Premium Member:", isPremium);
console.log("Remote Area:", isRemote);
console.log("Delivery Fee: ₹" + deliveryFee);
console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time:", deliveryDays, "days");
