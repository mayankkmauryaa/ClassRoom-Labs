// Q1 – The Startup Morning: Async Coffee Maker
// Usage: node q1_asyncCoffee.js

// helper: random delay between 1000 and 2000 ms
const randomDelay = () => 1000 + Math.floor(Math.random() * 1001);

// simulate random failure (20% chance)
const randomFail = () => Math.random() < 0.2;

// Step 1: boilWater - returns a Promise
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFail()) return reject(new Error("Boiler malfunction"));
            console.log("Step: Water boiled.");
            resolve("Boiled water");
        }, randomDelay());
    });
}

// Step 2: brewCoffee - returns a Promise
function brewCoffee(boiledWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFail()) return reject(new Error("Coffee grounds missing"));
            console.log("Step: Coffee brewed.");
            resolve("Brewed coffee");
        }, randomDelay());
    });
}

// Step 3: pourIntoCup - returns a Promise
function pourIntoCup(brewed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFail()) return reject(new Error("Cup not found"));
            console.log("Step: Coffee poured into cup.");
            resolve("Coffee in cup");
        }, randomDelay());
    });
}

// Use Promise chaining (.then())
console.log("Starting coffee process...");
boilWater()
    .then((water) => brewCoffee(water))
    .then((coffee) => pourIntoCup(coffee))
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((err) => {
        console.error("Coffee preparation failed:", err.message);
    });
