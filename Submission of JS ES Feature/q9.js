"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (!parsed.user || parsed.age === undefined)
            throw new Error("Missing required fields");

        parsed.age = Number(parsed.age);
        if (parsed.age < 18) continue;

        if (Number.isNaN(parsed.age))
            throw new Error("Invalid age");

        clean.push(parsed);
    } catch (err) {
        errors.push({ line: i, error: err.message });
        console.log(`Error at line ${i}: ${err.message}`);
    }
}

console.log("\nClean:", clean);
console.log("Errors:", errors);
