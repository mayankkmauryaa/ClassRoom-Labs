// Q10 – The Final Delivery: Async Pipeline Debugger
// Usage: node q10_deliveryPipeline.js

// util: random delay 1000..2000 ms
function randDelay() {
    return 1000 + Math.floor(Math.random() * 1001);
}
// util: random success (80% chance success)
function randomSuccess() {
    return Math.random() < 0.8;
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!randomSuccess()) return reject(new Error("Failed to take order"));
            console.log("Step 1: Order taken");
            resolve("order taken");
        }, randDelay());
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!randomSuccess()) return reject(new Error("Preparation failed"));
            console.log("Step 2: Food prepared");
            resolve("food prepared");
        }, randDelay());
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!randomSuccess()) return reject(new Error("Packing failed"));
            console.log("Step 3: Package ready");
            resolve("package ready");
        }, randDelay());
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!randomSuccess()) return reject(new Error("Dispatch failed"));
            console.log("Step 4: Out for delivery");
            resolve("dispatched");
        }, randDelay());
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!randomSuccess()) return reject(new Error("Delivery failed on the way"));
            console.log("Delivery completed!");
            resolve("delivered");
        }, randDelay());
    });
}

// runPipeline: use async/await and try/catch
async function runPipeline() {
    console.log("Start Pipeline");
    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
        console.log("Pipeline finished successfully.");
    } catch (err) {
        console.error("Pipeline failed!");
        console.error(err.message);
    }
}

// Kick off pipeline
runPipeline();

/*
Comments on async behavior and event loop:
- Each step returns a Promise which resolves/rejects after a timer.
- async/await allows writing sequential logic (await step()) even though the underlying operations are asynchronous.
- While awaiting, the current function yields control back to the event loop; that allows other microtasks/macrotasks to run.
- Each await causes the rest of the function to be scheduled as a microtask when the awaited Promise resolves; the event loop handles microtasks before moving to macrotasks, making Promise resolution immediate relative to timers when they settle.
*/
