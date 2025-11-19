// Q1.js

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration:
greetUser("Mayank", showEndMessage);
