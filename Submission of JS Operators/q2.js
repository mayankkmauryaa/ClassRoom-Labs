// String Manipulation Report
// Purpose: Format product titles and display cleaned result.

let productName = " wireless headphones PRO ";

// Trim and lowercase
let cleaned = productName.trim().toLowerCase();

// Capitalize first letter of each word
cleaned = cleaned.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// Replace 'Pro' with 'Pro Edition'
cleaned = cleaned.replace("Pro", "Pro Edition");

console.log("=== Product Title Formatter ===");
console.log("Original:", productName);
console.log("Cleaned Title:", cleaned);
console.log("Title Length:", cleaned.length);
