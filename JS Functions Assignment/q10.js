"use strict";

function outer() {
    console.log(count); // undefined — hoisted
    var count = 5;

    function inner() {
        console.log(count); // undefined — inner var hoisted separately
        var count = 10;
        console.log(count);
    }

    inner();
    console.log(count); // 5
}

outer();

// Arrow version
function outerArrow() {
    console.log(countA);
    var countA = 5;

    const innerArrow = () => {
        console.log(countB); // undefined
        var countB = 10;
        console.log(countB);
    };

    innerArrow();
    console.log(countA);
}

outerArrow();
