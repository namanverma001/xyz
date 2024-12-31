// filepath: script.js
function calculateIQ() {
    const age = parseFloat(document.getElementById('age').value);
    const score = parseFloat(document.getElementById('score').value);

    if (age && score && age > 0 && score > 0) {
        const iq = (score / age) * 100;
        document.getElementById('result').innerText = `Your IQ is: ${iq.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter both age and score.';
    }
}

function validateInputs() {
    const age = document.getElementById('age').value;
    const score = document.getElementById('score').value;
    const button = document.querySelector('button');

    if (age && score && age > 0 && score > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function resetForm() {
    document.getElementById('age').value = '';
    document.getElementById('score').value = '';
    document.getElementById('result').innerText = '';
    document.querySelector('button').disabled = true;
}

document.getElementById('age').addEventListener('input', validateInputs);
document.getElementById('score').addEventListener('input', validateInputs);
document.getElementById('reset').addEventListener('click', resetForm);