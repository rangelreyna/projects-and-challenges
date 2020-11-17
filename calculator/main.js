const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display-contents');
const keys = document.querySelector('.calculator__keys');
const clearButton = keys.querySelector('[data-action=clear]'); 


function getKeyType(action){
    if (!action){
        return 'number'; 
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
        return 'operator';
    } else { // decimal, clear, calculate 
        return action;
    }
}

function calculate(n1, operator, n2){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = 0;

    if (operator === 'add'){
        result = n1 + n2; 
    } else if (operator === 'subtract'){
        result = n1 - n2; 
    } else if (operator === 'multiply'){
        result = n1 * n2; 
    } else if (operator === 'divide'){
        result = n1 / n2; 
    }

    return +result.toFixed(8); // max of 8 digits after decimal 
}

function onNumberClick(keyText, displayText, prevKeyType){
    if (displayText === '0' || prevKeyType === 'operator' || prevKeyType === 'calculate'){
        display.textContent = keyText;
    } else {
        display.textContent = displayText + keyText; 
    }

    // slight reset for new calculation 
    if (prevKeyType === 'calculate'){
        calculator.dataset.firstValue = '';
        calculator.dataset.operator = '';
    } 
}

function onDecimalClick(displayText, prevKeyType){
    if (!displayText.includes('.')){ // can only have 1 decimal 
        display.textContent = displayText + '.'; 
    } 
    if (prevKeyType === 'operator' || prevKeyType === 'calculate'){
        display.textContent = '0.';
    }
}

function onOperatorClick(key, action, displayText, prevKeyType){
    const firstValue = calculator.dataset.firstValue; // if previously set 
    const operator = calculator.dataset.operator; // if previsouly set 
    const secondValue = displayText;
    let result = 0;

    // keep calculating if operator continues to be clicked 
    if (firstValue && operator && prevKeyType !== 'operator' && prevKeyType !== 'calculate'){
        result = calculate(firstValue, operator, secondValue);
        display.textContent = result;
        calculator.dataset.firstValue = result; 
    } else { // no previous operator clicks 
        calculator.dataset.firstValue = displayText;
    }

    // left align result if longer than 7 digits 
    if (result.toString().length > 7){
        calculator.classList.add('left-align-scroll');
    }

    key.classList.add('is-depressed'); // keep depressed until other key pressed 
    calculator.dataset.operator = action;
}

function onCalculateClick(displayText, prevKeyType){
    let firstValue = calculator.dataset.firstValue; 
    const operator = calculator.dataset.operator; 
    let secondValue = displayText; 
    let result = 0;
    
    // only make calculation if there is a firstValue saved 
    if (firstValue){ 
        if (prevKeyType === 'calculate'){
            // if keep pressing calculate -> keep doing same operation w/ carried second value
            firstValue = displayText; 
            secondValue = calculator.dataset.carriedSecondValue;
        }
        result = calculate(firstValue, operator, secondValue);
        display.textContent = result;
    }

    // left align result if longer than 7 digits 
    if (result.toString().length > 7){
        calculator.classList.add('left-align-scroll');
    }

    calculator.dataset.carriedSecondValue = secondValue; 
}

function onClearClick(keyText){
    display.textContent = '0';
            
    if (keyText === 'AC'){ // reset 
        calculator.dataset.firstValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.carriedSecondValue = '';
        calculator.dataset.prevKeyType = '';
    } else { // when clear key text is 'CE' 
        clearButton.textContent = 'AC';
    }
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        // key info 
        const key = e.target;
        const action = key.dataset.action;
        const keyType = getKeyType(action);
        const keyText = key.textContent; 
        const prevKeyType = calculator.dataset.prevKeyType; 
        // display info 
        const displayText = display.textContent;

        // remove .is-depressed class from all keys 
        Array.from(keys.children).forEach(k => k.classList.remove('is-depressed'));
        // go back to right align scroll 
        calculator.classList.remove('left-align-scroll');

        switch(keyType){
            case 'number':
                onNumberClick(keyText, displayText, prevKeyType);
                break;
            case 'decimal':
                onDecimalClick(displayText, prevKeyType);
                break;
            case 'operator':
                onOperatorClick(key, action, displayText, prevKeyType);
                break;
            case 'calculate':
                onCalculateClick(displayText, prevKeyType);
                break;
            case 'clear':
                onClearClick(keyText);
                break;
            default: 
                alert('Not valid!');
        }

        // open up 'clear entry' option 
        if (keyType !== 'clear'){
            clearButton.textContent = 'CE';
        }

        calculator.dataset.prevKeyType = keyType; 
    }
});