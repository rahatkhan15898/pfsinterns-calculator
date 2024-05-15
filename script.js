const display = document.getElementById('display');

function appendValue(value) {
    display.textContent += value;
}


function calculate() {
    try {
        const result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function clearDisplay() {
    display.textContent = '';
}
