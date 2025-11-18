// Q4 – DevOps Delay: Async Timeout Race
// Usage: node q4_deployRaceAll.js

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject(new Error("Server A failed"));
            resolve("Server A: deployment success (2s)");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject(new Error("Server B failed"));
            resolve("Server B: deployment success (3s)");
        }, 3000);
    });
}

// Promise.all -> wait for all to complete
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        results.forEach((r) => console.log(r));
    })
    .catch((err) => {
        console.error("At least one server deployment failed (Promise.all):", err.message);
    });

// Promise.race -> first to settle (resolve or reject)
Promise.race([serverA(), serverB()])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((err) => {
        console.error("Fastest response failed:", err.message);
    });
