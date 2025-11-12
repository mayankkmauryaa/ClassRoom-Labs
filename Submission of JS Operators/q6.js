// Event-Based Counter Simulation
// Purpose: Increment/decrement counter with nested function scope.

let count = 0;

function increment() {
    count++;
    function log() {
        console.log("Current Count after Increment:", count);
    }
    log();
}

function decrement() {
    count--;
    function log() {
        console.log("Current Count after Decrement:", count);
    }
    log();
}

// Simulate clicks
increment();
increment();
decrement();
