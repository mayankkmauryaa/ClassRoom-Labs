// Departmental Employee Evaluator
// Purpose: Evaluate employees based on scores.

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("=== Employee Performance Evaluation ===");
departments.forEach(([dept, score]) => {
    let status = "";
    if (score >= 90) status = "Excellent";
    else if (score >= 75) status = "Good";
    else if (score >= 60) status = "Average";
    else status = "Needs Improvement";

    console.log(`${dept}: ${score} → ${status}`);
});
