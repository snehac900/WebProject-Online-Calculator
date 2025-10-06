let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
  currentInput += num;
}

function appendOperator(operator) {
  const lastChar = currentInput.slice(-1);
  if ('+-*/%'.includes(lastChar)) return;
  display.innerText += operator;
  currentInput += operator;
}

function clearDisplay() {
  display.innerText = '0';
  currentInput = '';
}

function squareNumber() {
  try {
    let result = eval(currentInput);
    result = result * result;
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}
