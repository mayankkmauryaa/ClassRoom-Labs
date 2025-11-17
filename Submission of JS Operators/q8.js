// Dynamic Discount Evaluator
// Purpose: Apply category-based and overall discounts for cart.

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let finalTotal = 0;

cart.forEach(product => {
    let discount = 0;
    if (product.category === "electronics") discount = 0.10;
    else if (product.category === "fashion") discount = 0.05;

    product.discountedPrice = product.price * (1 - discount);
    finalTotal += product.discountedPrice;
});

// Extra 5% if cart > 50000
if (finalTotal > 50000) finalTotal *= 0.95;

console.log("=== Cart Summary ===");
cart.forEach(p => console.log(`${p.item} (${p.category}): ₹${p.discountedPrice.toFixed(2)}`));
console.log("Final Total after Discounts: ₹" + finalTotal.toFixed(2));
