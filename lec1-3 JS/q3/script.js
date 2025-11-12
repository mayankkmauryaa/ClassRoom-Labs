// Cinema Ticketing System
// Purpose: Calculate total movie ticket cost with discounts and service fee.

let showTime = "Evening"; // or "Morning"
let numTickets = 4;
let isStudent = true;
let age = 22;

let basePrice = showTime === "Morning" ? 120 : 180;
let total = basePrice * numTickets;

let discount = 0;
if (isStudent) discount = 10;
else if (age > 60) discount = 20;

let discountedTotal = total - (total * discount) / 100;

// Add service fee if more than 3 tickets
if (numTickets > 3) discountedTotal += 50;

console.log("=== Ticket Summary ===");
console.log("Show:", showTime);
console.log("Tickets:", numTickets);
console.log("Base Price per Ticket: ₹" + basePrice);
console.log("Discount Applied:", discount + "%");
console.log("Final Amount: ₹" + discountedTotal.toFixed(2));
