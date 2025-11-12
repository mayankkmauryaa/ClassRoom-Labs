// Random Coupon Generator
// Purpose: Generate a random discount coupon and bonus if prime number.

let couponNum = Math.floor(Math.random() * 100) + 1;
let rewardMsg = "";

// Determine discount range
if (couponNum <= 30) rewardMsg = "You won a 10% discount";
else if (couponNum <= 60) rewardMsg = "You won a 20% discount";
else if (couponNum <= 90) rewardMsg = "You won a 30% discount";
else rewardMsg = "You won a 50% Mega Offer!";

// Check for prime number
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("=== Coupon Generator ===");
console.log("Your Coupon Number:", couponNum);
console.log(rewardMsg);

if (isPrime(couponNum)) console.log("Prime number bonus applied!");
