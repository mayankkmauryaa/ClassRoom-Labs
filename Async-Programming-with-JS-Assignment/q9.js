// Q9 – Debugging the Event Loop
// Usage: node q9_eventLoopDebug.js

// Prediction (in comments):
// I predict the output will be:
// 1. "Script start"
// 2. "Script end"
// 3. "Promise callback"
// 4. "Timeout callback"

// Now run the actual code:
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Synchronous logs ("Script start", "Script end") run immediately.
- Promise.then handlers are microtasks and are executed after the current call stack completes but before macrotasks.
- setTimeout callbacks are macrotasks, which are processed after microtasks are drained.
Therefore the Promise callback appears before the setTimeout callback.
*/
