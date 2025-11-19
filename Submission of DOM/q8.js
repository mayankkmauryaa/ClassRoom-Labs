// q8.js
// Custom dropdown toggled by button. Clicking option updates button text.
// Clicking outside closes dropdown using capturing phase.

const ddBtn = document.getElementById('ddBtn');
const ddOptions = document.getElementById('ddOptions');
const customDropdown = document.getElementById('customDropdown');

// Toggle on button click
ddBtn.addEventListener('click', (e) => {
    ddOptions.classList.toggle('hidden');
    e.stopPropagation(); // don't let global handler immediately close
});

// Option click
ddOptions.addEventListener('click', (e) => {
    const opt = e.target.closest('.option');
    if (!opt) return;
    ddBtn.textContent = opt.textContent;
    ddOptions.classList.add('hidden');
});

// Clicking outside closes dropdown: use capturing on document
document.addEventListener('click', (e) => {
    // This runs in bubbling by default; to ensure capturing phase use {capture:true}
}, true);

// The actual listener using capturing:
document.addEventListener('click', (e) => {
    if (!customDropdown.contains(e.target)) {
        ddOptions.classList.add('hidden');
    }
}, true);
