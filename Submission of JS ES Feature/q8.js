// Wrong version (strict mode errors):
// duplicate parameters, undeclared variable, illegal delete.

"use strict";

function demoCorrect(a, b) {
    const total = 10;
    return a + b + total;
}

console.log(demoCorrect(5, 10));
