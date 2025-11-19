// q3.js
// 3-step form: Name -> Email -> Password. Basic validation per step.
// Shows summary when all steps complete.

const steps = Array.from(document.querySelectorAll('#multiStep .step'));
let currentStep = 0;
const btnNext = document.getElementById('ms-next');
const btnBack = document.getElementById('ms-back');
const summaryDiv = document.getElementById('ms-summary');

function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle('hidden', i !== index));
    currentStep = index;
    btnBack.disabled = index === 0;
    btnNext.textContent = (index === steps.length - 1) ? 'Finish' : 'Next';
}

function validateStep(index) {
    const step = steps[index];
    const input = step.querySelector('input');
    const val = input.value.trim();
    if (index === 0) {
        return val.length >= 1;
    } else if (index === 1) {
        // basic email validation
        return /\S+@\S+\.\S+/.test(val);
    } else if (index === 2) {
        return val.length >= 6;
    }
    return false;
}

btnNext.addEventListener('click', () => {
    if (!validateStep(currentStep)) {
        alert('Please enter valid input for this step.');
        return;
    }
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    } else {
        // finish -> show summary
        const name = document.getElementById('ms-name').value.trim();
        const email = document.getElementById('ms-email').value.trim();
        const pass = document.getElementById('ms-pass').value;
        summaryDiv.innerHTML = `<h3>Summary</h3>
      <div><strong>Name:</strong> ${escapeHtml(name)}</div>
      <div><strong>Email:</strong> ${escapeHtml(email)}</div>
      <div><strong>Password:</strong> ${'*'.repeat(Math.max(6, pass.length))}</div>`;
        summaryDiv.classList.remove('hidden');
        // hide the form steps
        steps.forEach(s => s.classList.add('hidden'));
        btnBack.disabled = true;
        btnNext.disabled = true;
    }
});

btnBack.addEventListener('click', () => {
    if (currentStep > 0) showStep(currentStep - 1);
});

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

// init
showStep(0);
