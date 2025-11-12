// ==========================================================================
//  CINEMA TICKETING SYSTEM
//  Purpose: Calculate total movie ticket cost with discounts and service fees
// ==========================================================================

// --- Input Variables ---
let showTime = "Evening";   // Options: "Morning" or "Evening"
let isStudent = false;      // true if the customer is a student
let age = 65;               // Customer age
let tickets = 4;            // Number of tickets booked

// --- Constants for Pricing ---
const MORNING_PRICE = 120;   // ₹120 per ticket for morning shows
const EVENING_PRICE = 180;   // ₹180 per ticket for evening shows
const STUDENT_DISCOUNT = 10; // 10% discount
const SENIOR_DISCOUNT = 20;  // 20% discount for age > 60
const SERVICE_FEE = 50;      // Flat ₹50 fee for more than 3 tickets

// --- Determine Base Price per Ticket ---
let basePrice;
if (showTime.toLowerCase() === "morning") {
    basePrice = MORNING_PRICE;
    console.log("Show Time: Morning (₹120 per ticket)");
} else {
    basePrice = EVENING_PRICE;
    console.log("Show Time: Evening (₹180 per ticket)");
}

// --- Calculate Base Total ---
let baseTotal = basePrice * tickets;

// --- Determine Applicable Discount ---
let discountPercent = 0;

if (isStudent) {
    discountPercent = STUDENT_DISCOUNT;
    console.log("Discount Applied: 10% (Student)");
} else if (age > 60) {
    discountPercent = SENIOR_DISCOUNT;
    console.log("Discount Applied: 20% (Senior Citizen)");
} else {
    console.log("No discount applied.");
}

// --- Calculate Discounted Total ---
let discountAmount = (baseTotal * discountPercent) / 100;
let discountedTotal = baseTotal - discountAmount;

// --- Check for Service Fee ---
let finalAmount = discountedTotal;
let serviceFee = 0;

if (tickets > 3) {
    serviceFee = SERVICE_FEE;
    finalAmount += serviceFee;
    console.log("Service Fee: ₹50 added (more than 3 tickets booked).");
}

// --- Final Output ---
console.log("=================================================");
console.log("🎬 CINEMA BILL SUMMARY");
console.log("-------------------------------------------------");
console.log(`Tickets Booked     : ${tickets}`);
console.log(`Show Time          : ${showTime}`);
console.log(`Base Price/Ticket  : ₹${basePrice}`);
console.log(`Base Total         : ₹${baseTotal}`);
console.log(`Discount Applied    : ${discountPercent}%`);
console.log(`Discounted Total   : ₹${discountedTotal.toFixed(2)}`);
console.log(`Service Fee        : ₹${serviceFee}`);
console.log("-------------------------------------------------");
console.log(`💰 Final Amount Payable : ₹${finalAmount.toFixed(2)}`);
console.log("=================================================");
