// Q7 – The Lazy Loader: Promise Combinator Practice
// Usage: node q7_allSettledLoader.js

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25 ? reject("Profile failed") : resolve("Profile Loaded");
        }, 2000);
    });
}
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25 ? reject("Posts failed") : resolve("Posts Loaded");
        }, 1500);
    });
}
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25 ? reject("Messages failed") : resolve("Messages Loaded");
        }, 1000);
    });
}

(async function runLoaders() {
    const start = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

    const end = Date.now();
    console.log(`Total time: ${(end - start) / 1000}s`);

    results.forEach((r, idx) => {
        const name = ["Profile", "Posts", "Messages"][idx];
        if (r.status === "fulfilled") {
            console.log(`${name}: Success -> ${r.value}`);
        } else {
            console.log(`${name}: Failed -> ${r.reason}`);
        }
    });
})();
