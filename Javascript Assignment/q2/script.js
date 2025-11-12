// =======================================================================
//  BANKING INTEREST CALCULATOR
//  Purpose: Calculate final balance based on account type, amount, and years
// =======================================================================

// --- Input Variables ---
let accountType = "Fixed Deposit";   // Options: "Savings" or "Fixed Deposit"
let amount = 150000;                 // Principal amount in ₹
let years = 5;                       // Investment duration in years

// --- Constants for Interest Rates ---
const SAVINGS_RATE = 4;              // 4% annual for savings
const FIXED_DEPOSIT_RATE = 6.5;      // 6.5% annual for fixed deposit
const BONUS_THRESHOLD = 100000;      // Extra 1% if deposit > ₹1,00,000
const BONUS_RATE = 1;                // 1% bonus rate

// --- Determine Base Interest Rate Based on Account Type ---
let rate;

if (accountType.toLowerCase() === "savings") {
    rate = SAVINGS_RATE;
    console.log("Account Type: Savings Account (4% base interest)");
} else if (accountType.toLowerCase() === "fixed deposit") {
    rate = FIXED_DEPOSIT_RATE;
    console.log("Account Type: Fixed Deposit (6.5% base interest)");
} else {
    console.log("Invalid account type entered. Defaulting to Savings rate (4%).");
    rate = SAVINGS_RATE;
}

// --- Apply Bonus Interest if Amount > ₹1,00,000 ---
if (amount > BONUS_THRESHOLD) {
    rate += BONUS_RATE;
    console.log("Bonus interest of +1% applied for high deposit amount.");
}

// --- Compound Interest Formula ---
// Formula: total = amount * (1 + rate/100) ^ years
let total = amount * Math.pow((1 + rate / 100), years);

// --- Rounding to Two Decimals ---
total = total.toFixed(2);

// --- Final Output ---
console.log("=================================================");
console.log("🏦 BANK INTEREST CALCULATION SUMMARY");
console.log("-------------------------------------------------");
console.log(`Account Type     : ${accountType}`);
console.log(`Principal Amount : ₹${amount}`);
console.log(`Interest Rate    : ${rate}%`);
console.log(`Duration         : ${years} years`);
console.log("-------------------------------------------------");
console.log(`💰 Final Balance  : ₹${total}`);
console.log("=================================================");
