// q9.js
// Validations:
// - Name required
// - Email required and must contain '@'
// - Password min 6 chars
// Uses preventDefault on submit and auto-removes errors on input change.

const signupForm = document.getElementById('signupForm');
const fName = document.getElementById('f-name');
const fEmail = document.getElementById('f-email');
const fPass = document.getElementById('f-pass');

const errName = document.getElementById('err-name');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-pass');
const formMessage = document.getElementById('formMessage');

function validateAll() {
    let ok = true;
    // Name
    if (!fName.value.trim()) {
        errName.textContent = 'Name is required';
        ok = false;
    } else {
        errName.textContent = '';
    }
    // Email
    if (!fEmail.value.trim()) {
        errEmail.textContent = 'Email is required';
        ok = false;
    } else if (!fEmail.value.includes('@')) {
        errEmail.textContent = 'Email must contain @';
        ok = false;
    } else {
        errEmail.textContent = '';
    }
    // Password
    if (fPass.value.length < 6) {
        errPass.textContent = 'Password must be at least 6 characters';
        ok = false;
    } else {
        errPass.textContent = '';
    }
    return ok;
}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // block real submission for this assignment
    formMessage.textContent = '';
    if (validateAll()) {
        formMessage.textContent = 'Form Submitted Successfully';
        formMessage.className = 'success';
        // Optionally clear the form
        signupForm.reset();
    } else {
        formMessage.textContent = '';
    }
});

// Remove errors automatically when user corrects input
[fName, fEmail, fPass].forEach(input => {
    input.addEventListener('input', () => {
        validateAll();
    });
});

