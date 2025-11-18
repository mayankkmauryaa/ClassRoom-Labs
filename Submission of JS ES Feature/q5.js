"use strict";

console.log(score); // undefined (var hoisted)
announce();         // works (function hoisted)

var score = 50;
function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}
startGame();

// Arrow versions (not hoisted)
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();
