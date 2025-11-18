// Q5 – Frontend Rush: Avoiding Callback Hell
// Usage: node q5_callbackHell_vs_asyncAwait.js

// Helper stage function (1s each)
function stage(name, cb) {
    setTimeout(() => {
        console.log(`Stage done: ${name}`);
        cb && cb();
    }, 1000);
}

/* Part A: Callback hell (nested) */
function pipelineWithCallbacks() {
    console.log("Pipeline (callbacks) start");
    stage("design", () => {
        stage("build", () => {
            stage("test", () => {
                stage("deploy", () => {
                    stage("celebrate", () => {
                        console.log("Pipeline (callbacks) finished");
                    });
                });
            });
        });
    });
}

/* Part B: Async/await version (cleaner) */
function stagePromise(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage done: ${name}`);
            resolve(name);
        }, 1000);
    });
}

async function pipelineAsyncAwait() {
    console.log("Pipeline (async/await) start");
    try {
        await stagePromise("design");
        await stagePromise("build");
        await stagePromise("test");
        await stagePromise("deploy");
        await stagePromise("celebrate");
        console.log("Pipeline (async/await) finished");
    } catch (err) {
        console.error("Pipeline failed:", err);
    }
}

/* Run both to compare */
pipelineWithCallbacks();
setTimeout(() => {
    // delay start of async/await pipeline a bit to avoid interleaving logs
    pipelineAsyncAwait();
}, 7000);

/*
Commentary:
- Callback hell comes from deeply nested anonymous callbacks which are hard to read and error-prone.
- async/await flattens asynchronous control flow into sequential-looking code, improving readability, maintainability, and easier error handling via try/catch.
*/
