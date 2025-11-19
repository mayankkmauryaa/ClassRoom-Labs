// q2.js
// Max 100 chars. Yellow at 20 chars left, red at 0 and prevents further typing.
// Reset button clears content.

const charArea = document.getElementById('charArea');
const charCounter = document.getElementById('charCounter');
const resetChars = document.getElementById('resetChars');
const MAX_CHARS = 100;
const WARN_THRESHOLD = 20;

function updateCounter() {
    const remaining = MAX_CHARS - charArea.value.length;
    charCounter.textContent = remaining;
    charCounter.style.background = '';
    charCounter.style.padding = '2px 6px';
    if (remaining <= 0) {
        charCounter.style.background = 'salmon';
    } else if (remaining <= WARN_THRESHOLD) {
        charCounter.style.background = 'khaki';
    } else {
        charCounter.style.background = '';
    }
}

// Prevent typing when at limit: use keydown to prevent default for printable keys
charArea.addEventListener('keydown', (e) => {
    const val = charArea.value;
    // Allow navigation, backspace, delete, arrows, ctrl/cmd combos
    const allowed =
        e.key === 'Backspace' || e.key === 'Delete' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight' ||
        e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.ctrlKey || e.metaKey || e.key.startsWith('F');
    if (allowed) return;
    if (val.length >= MAX_CHARS) {
        // At or above limit - block additional typing
        e.preventDefault();
        // Ensure content is trimmed to MAX_CHARS
        charArea.value = val.substring(0, MAX_CHARS);
        updateCounter();
    }
});

// Also handle paste/input to trim if user pastes long text
charArea.addEventListener('input', () => {
    if (charArea.value.length > MAX_CHARS) {
        charArea.value = charArea.value.substring(0, MAX_CHARS);
    }
    updateCounter();
});

resetChars.addEventListener('click', () => {
    charArea.value = '';
    updateCounter();
});

// initial
updateCounter();
