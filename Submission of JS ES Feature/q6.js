"use strict";

function generatePyramid(limit = 5) {
    for (let i = 1; i <= limit; i++) {
        let row = "";
        for (let j = 0; j < i; j++) row += "* ";
        console.log(row);
    }
}

generatePyramid(4);

// var version to show scoping differences
function generateVar(limit = 4) {
    for (var i = 1; i <= limit; i++) {
        var row = "";
        for (var j = 0; j < i; j++) row += "* ";
        console.log(row);
    }
}

generateVar();
