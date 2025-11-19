// q6.js
// Filters table rows in real-time using input event. Case-insensitive.
// Shows "No results found" when none match.

const studentSearch = document.getElementById('studentSearch');
const studentsTable = document.getElementById('studentsTable');
const tableBody = studentsTable.querySelector('tbody');
const noResults = document.getElementById('noResults');

studentSearch.addEventListener('input', () => {
    const q = studentSearch.value.trim().toLowerCase();
    let anyVisible = false;
    Array.from(tableBody.rows).forEach(row => {
        const text = row.innerText.toLowerCase();
        const visible = text.includes(q);
        row.style.display = visible ? '' : 'none';
        if (visible) anyVisible = true;
    });
    noResults.classList.toggle('hidden', anyVisible);
});
