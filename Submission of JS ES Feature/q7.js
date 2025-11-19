"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class CalcError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
    }
}

function compute(op, a, b) {
    switch (op) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "divide":
            if (b === 0) throw new CalcError("Divide by zero", "DivideByZero");
            return a / b;
        case "power": return a ** b;
        case "root":
            if (a < 0) throw new CalcError("Negative root", "NegativeRoot");
            return a ** (1 / b);
        default:
            throw new CalcError("Invalid operation", "InvalidOperation");
    }
}

for (const op of operations) {
    try {
        const result = compute(op, num1, num2);
        console.log(`${op}: ${result}`);
    } catch (err) {
        console.log(`Error (${op}): ${err.type} — ${err.message}`);
    }
}
