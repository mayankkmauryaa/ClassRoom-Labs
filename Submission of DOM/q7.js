// q7.js
// Tracks mouse inside a 400x400 box and logs clientX/clientY live.
// Double-click inside drops a red dot at the click position.

const mouseBox = document.getElementById('mouseBox');
const mxSpan = document.getElementById('mx');
const mySpan = document.getElementById('my');

mouseBox.addEventListener('mousemove', (e) => {
    // Only inside the box
    mxSpan.textContent = e.clientX;
    mySpan.textContent = e.clientY;
});

mouseBox.addEventListener('dblclick', (e) => {
    // Calculate position relative to the box
    const rect = mouseBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    mouseBox.appendChild(dot);
});
