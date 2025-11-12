// Marks Analyzer
// Purpose: Calculate average, grade, and failure condition.

let marks = [88, 92, 70, 65, 30];
let total = 0;
let fails = 0;

for (let m of marks) {
  total += m;
  if (m < 40) fails++;
}

let average = total / marks.length;

// Determine grade
let grade = "";
if (average >= 90) grade = "A+";
else if (average >= 75) grade = "A";
else if (average >= 60) grade = "B";
else if (average >= 40) grade = "C";
else grade = "Fail";

console.log("=== Marks Summary ===");
console.log("Marks:", marks);
console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);

if (fails >= 2) console.log("Result: Repeat Year");
else console.log("Result: Pass");
