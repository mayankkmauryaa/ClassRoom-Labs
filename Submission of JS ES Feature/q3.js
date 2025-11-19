"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
    }
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];

    try {
        if (tx === null) throw new TransactionError("Null entry", "NullEntry");
        if (!tx.id) throw new TransactionError("Missing ID", "MissingID");
        if (tx.amount === undefined) throw new TransactionError("Missing amount", "MissingAmount");
        if (tx.amount < 0) throw new TransactionError("Negative amount", "NegativeAmount");

        valid.push(tx);
        console.log(`Valid: Transaction ${tx.id} amount ${tx.amount}`);
    } catch (err) {
        invalid.push({ index: i, error: err.message, type: err.type });
        console.log(`Invalid (index ${i}): ${err.type} — ${err.message}`);
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
