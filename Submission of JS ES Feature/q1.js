"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

function isValidNumberVal(v) {
    const n = Number(v);
    if (typeof v === "string") {
        if (v.trim() === "") return false;
        return !Number.isNaN(n) && /^[+-]?\d+(\.\d+)?$/.test(v.trim());
    }
    return typeof n === "number" && !Number.isNaN(n);
}

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];

    const asString = String(original);
    const asBoolean = Boolean(original);
    const asNumber = Number(original);

    if (isValidNumberVal(original)) {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push({ index: i, value: original, attempted: asNumber });
    }

    console.log(`Index ${i}: original=${JSON.stringify(original)} | String="${asString}" | Boolean=${asBoolean} | Number=${asNumber}`);
}

console.log("\nValid numeric values:", validNumbers);
console.log("Invalid numeric values:", invalidNumbers);
