"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
    try {
        if (!emp) throw new Error("Missing employee object");
        if (!emp.name) throw new Error("Missing employee name");

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary)) throw new Error(`Invalid salary for ${emp.name}`);
        if (Number.isNaN(years)) throw new Error(`Invalid years for ${emp.name}`);

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
    } catch (error) {
        console.log(`Error processing ${emp?.name}: ${error.message}`);
    }
}
