// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Usage (Node + node-fetch): node q6_productFetcher.js
// In browser: just run fetch version in devtools console or include in a script tag.

// Node environment: if running in Node.js older than v18, you may need to install node-fetch.
// But below code assumes a browser or Node v18+ with global fetch.

async function fetchProducts() {
    const url = "https://fakestoreapi.com/products";
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const products = await res.json();

        products.forEach((p) => {
            console.log(`Product: ${p.title}`);
            console.log(`Price: $${p.price}`);
            console.log(`Image: ${p.image}`);
            console.log("---");
        });

        // Bonus (optional): If running in browser, you could create HTML cards:
        // const container = document.getElementById('products');
        // products.forEach(p => {
        //   const card = document.createElement('div');
        //   const title = document.createElement('h3');
        //   const price = document.createElement('p');
        //   const img = document.createElement('img');
        //   title.textContent = p.title;
        //   price.textContent = `$${p.price}`;
        //   img.src = p.image;
        //   img.alt = p.title;
        //   card.appendChild(title);
        //   card.appendChild(price);
        //   card.appendChild(img);
        //   container.appendChild(card);
        // });

    } catch (err) {
        console.error("Failed to load products. Please try again.");
        console.error(err.message);
    }
}

// Run the fetcher
fetchProducts();
