// Q8 – Order Processing Flow: Async Retry Mechanism
// Usage: node q8_orderRetry.js

function submitOrder() {
    // Fails 50% of the time
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) reject(new Error("Network error - submit failed"));
            else resolve("Order accepted by server");
        }, 500); // quick response for demo
    });
}

async function processOrder() {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const res = await submitOrder();
            console.log(`Attempt ${attempt}: Success -> ${res}`);
            return res;
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed -> ${err.message}`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed");
            }
            // optionally wait a bit before retrying (not required, but realistic)
            await new Promise((r) => setTimeout(r, 300));
        }
    }
}

// Run and handle overall failure
(async () => {
    try {
        await processOrder();
        console.log("Order processed successfully.");
    } catch (err) {
        console.error(err.message);
    }
})();
