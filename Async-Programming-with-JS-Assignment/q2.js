// Q2 – Task Scheduler: Micro vs Macro Challenge
// Usage: node q2_eventLoopOrder.js

console.log("Start");

setTimeout(() => {
    console.log("macrotask: setTimeout callback");
}, 0); // macrotask

Promise.resolve().then(() => {
    console.log("microtask: Promise.then callback");
}); // microtask

console.log("Synchronous log here");

console.log("End");

/*
Explanation (in comments):
- Output order will be:
  1. "Start"
  2. "Synchronous log here"
  3. "End"
  4. "microtask: Promise.then callback"
  5. "macrotask: setTimeout callback"

Why?
- Synchronous code runs first as it is on the main stack.
- After the current tick finishes, the event loop drains the microtask queue (Promises) before handling macrotasks (setTimeout), so Promise callbacks run before setTimeout callbacks.
*/
