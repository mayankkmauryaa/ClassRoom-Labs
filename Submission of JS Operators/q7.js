// Customer Feedback Processor
// Purpose: Analyze feedback for positivity and word count.

let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;
let isNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("=== Feedback Analysis ===");
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);
console.log("Sentiment:", isNegative ? "Needs Improvement" : "Positive Feedback");
