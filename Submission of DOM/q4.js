// q4.js
// Adds class to body using setAttribute and stores current theme in data-theme attribute.

const themeButtons = document.querySelectorAll('[data-theme-button]');

function applyTheme(themeName) {
    // Use setAttribute to set class and data-theme
    // Remove other theme classes first
    document.body.setAttribute('class', `theme-${themeName}`); // sets class via setAttribute
    document.body.setAttribute('data-theme', themeName);
    // For demo: also dynamically set background style (optional)
    if (themeName === 'dark') {
        document.body.style.background = '#222';
        document.body.style.color = '#eee';
    } else if (themeName === 'blue') {
        document.body.style.background = '#e7f0ff';
        document.body.style.color = '#001f4d';
    } else {
        document.body.style.background = '';
        document.body.style.color = '';
    }
}

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme-button');
        applyTheme(theme);
    });
});

// restore if data-theme present on load (not required but helpful)
const initial = document.body.getAttribute('data-theme');
if (initial) applyTheme(initial);
