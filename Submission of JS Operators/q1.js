// Scope Conflict Resolver
// Purpose: Demonstrate proper variable scoping and calculate total salary.

let bonus = 5000; // Global bonus

function calculateSalary(isPermanent) {
    let salary = 40000; // Local salary
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus; // Add global bonus if permanent
    }

    console.log("=== Salary Calculation ===");
    console.log("Is Permanent Employee:", isPermanent);
    console.log("Local Salary:", salary);
    console.log("Total Salary:", totalSalary);
}

// Test different cases
calculateSalary(true);  // Bonus applied
calculateSalary(false); // Bonus not applied

// Global bonus remains unchanged
console.log("Global Bonus remains:", bonus);
