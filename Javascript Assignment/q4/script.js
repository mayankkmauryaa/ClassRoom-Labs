// ==========================================================================
//  MARKS ANALYZER
//  Purpose: Analyze student marks, calculate average, percentage, and grade
// ==========================================================================

// --- Input: Marks for 5 subjects (out of 100) ---
let marks = [85, 92, 78, 88, 69]; // Example marks array

// --- Constants ---
const SUBJECT_COUNT = marks.length;
const MAX_MARKS_PER_SUBJECT = 100;

// --- Step 1: Calculate Total Marks ---
let total = 0;
for (let i = 0; i < SUBJECT_COUNT; i++) {
    total += marks[i];
}

// --- Step 2: Calculate Average and Percentage ---
let average = total / SUBJECT_COUNT;
let percentage = (total / (SUBJECT_COUNT * MAX_MARKS_PER_SUBJECT)) * 100;

// --- Step 3: Determine Grade Based on Percentage ---
let grade = "";

if (percentage >= 90 && percentage <= 100) {
    grade = "A+";
} else if (percentage >= 75 && percentage <= 89) {
    grade = "A";
} else if (percentage >= 60 && percentage <= 74) {
    grade = "B";
} else if (percentage >= 40 && percentage <= 59) {
    grade = "C";
} else {
    grade = "Fail";
}

// --- Step 4: Check for Individual Subject Fails ---
let failedSubjects = 0;
for (let i = 0; i < SUBJECT_COUNT; i++) {
    if (marks[i] < 40) {
        failedSubjects++;
    }
}

// --- Step 5: Determine Final Status ---
let finalStatus = "";

if (failedSubjects >= 2) {
    finalStatus = "Repeat Year";
} else if (failedSubjects === 1 && percentage >= 40) {
    finalStatus = "Supplementary Exam Required";
} else {
    finalStatus = "Pass";
}

// --- Step 6: Output the Detailed Report ---
console.log("=================================================");
console.log("📊 STUDENT MARKS ANALYSIS");
console.log("-------------------------------------------------");
for (let i = 0; i < SUBJECT_COUNT; i++) {
    console.log(`Subject ${i + 1}: ${marks[i]} / ${MAX_MARKS_PER_SUBJECT}`);
}
console.log("-------------------------------------------------");
console.log(`Total Marks   : ${total}`);
console.log(`Average Marks : ${average.toFixed(2)}`);
console.log(`Percentage    : ${percentage.toFixed(2)}%`);
console.log(`Grade         : ${grade}`);
console.log(`Failed Subjects: ${failedSubjects}`);
console.log("-------------------------------------------------");
console.log(`🏁 Final Result: ${finalStatus}`);
console.log("=================================================");
