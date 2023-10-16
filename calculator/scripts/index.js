let screen = document.getElementById('calculator__screen');
let currentInput = '0';
let operator = null;
let prevInput = null;

function appendToScreen(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    screen.innerText = currentInput;
}

function clearScreen() {
    currentInput = '0';
    operator = null;
    prevInput = null;
    screen.innerText = currentInput;
}

function handleOperation(op) {
    if (operator !== null) {
        performEvaluation();
    }
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
}

function performEvaluation() {
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);
    if (operator === '+') {
        currentInput = (prev + current).toString();
    } else if (operator === '-') {
        currentInput = (prev - current).toString();
    } else if (operator === '*') {
        currentInput = (prev * current).toString();
    } else if (operator === '/') {
        currentInput = (prev / current).toString();
    }
    screen.innerText = currentInput;
    operator = null;
    prevInput = null;
}