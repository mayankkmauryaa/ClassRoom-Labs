// Q3 – Bug Tracker: Callback to Promise Migration
// Usage: node q3_getBugs.js

// Original callback-style (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// Convert to Promise-based getBugs()
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const simulateFailure = Math.random() < 0.3; // 30% failure
            if (simulateFailure) {
                reject(new Error("Failed to fetch bugs from server"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Fetched bugs:");
        console.table(bugs.map((bug, i) => ({ id: i + 1, bug })));
    })
    .catch((err) => {
        console.error("Error fetching bugs:", err.message);
    });
