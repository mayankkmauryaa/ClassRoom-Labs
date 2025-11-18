// Q2.js

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, n => n * 2);
const squared = applyOperation(numbers, n => n * n);

console.log("Doubled:", doubled);   // [2,4,6,8]
console.log("Squared:", squared);   // [1,4,9,16]
