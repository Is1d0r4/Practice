let prevousValue;
let currentValue = 0;
let historyArray = [];
let redoStack = [];
const redoButton = document.getElementById('redoBtn');

function add(x) {
    const action = '+' + x;
    prevousValue = currentValue;
    currentValue += x;
    updateHistory(action);
}

function subtract(x) {
    const action = '-' + x;
    prevousValue = currentValue;
    currentValue -= x;
    updateHistory(action);
}

function updateHistory(action) {    
    historyArray.push({ currentValue, prevousValue, action });
    render();
}

function undo() {
    if (historyArray.length > 0) {
        const currentState = historyArray.pop();
        redoStack.push(currentState);
        currentValue = currentState.currentValue;
        redoButton.disabled = false;
        render();
    }
}

function redo() {
    if (redoStack.length === 0) {
        redoButton.disabled = true;
        return
    };
    const currentState = redoStack.pop();
    currentValue = currentState.currentValue;
    historyArray.push(currentState);
    render();
}

function render() {
    const historyList = document.getElementById('history');
    const currentValuePlaceholder = document.getElementById('currentValue');

    historyList.innerHTML = '';
    historyList.style.listStyleType = 'none';

    for(const item of historyArray) {
        const historyItem = document.createElement('li');
        historyItem.innerText = `${item.action} (${item.prevousValue} -> ${item.currentValue})`;
        historyList.appendChild(historyItem);
    }

    currentValuePlaceholder.innerText = currentValue;
}


