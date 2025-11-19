// q1.js
// Handles adding products, and uses event delegation on the <ul> to handle Edit/Delete.
// Inline editing auto-saves on blur/click outside.

const productInput = document.getElementById('productInput');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

function createProductItem(name) {
    const li = document.createElement('li');
    li.dataset.name = name;
    li.innerHTML = `
    <span class="prod-name">${escapeHtml(name)}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
    return li;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

addProductBtn.addEventListener('click', () => {
    const name = productInput.value.trim();
    if (!name) return;
    productList.appendChild(createProductItem(name));
    productInput.value = '';
});

// Event delegation on ul for edit and delete
productList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    if (e.target.classList.contains('delete-btn')) {
        // Delete item
        li.remove();
    } else if (e.target.classList.contains('edit-btn')) {
        // Start inline edit
        startInlineEdit(li);
    }
});

// Start inline edit by replacing the text span with an input
function startInlineEdit(li) {
    const span = li.querySelector('.prod-name');
    const oldVal = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldVal;
    input.className = 'inline-edit';
    // Replace span with input
    li.insertBefore(input, span);
    span.style.display = 'none';
    input.focus();
    // Save on blur (click outside) or Enter
    input.addEventListener('blur', () => finishInlineEdit(li, input, span));
    input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            input.blur();
        } else if (ev.key === 'Escape') {
            // cancel
            input.value = oldVal;
            input.blur();
        }
    });
}

function finishInlineEdit(li, input, span) {
    const newVal = input.value.trim();
    if (newVal) {
        span.textContent = newVal;
        li.dataset.name = newVal;
    }
    input.remove();
    span.style.display = '';
}
