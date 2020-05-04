document.addEventListener('DOMContentLoaded', function () {
    let result;
    let operator;
    let firstOperand;
    let secondOperand;

    let resultExists = false;
    let operatorExists = false;
    let firstOperandExists = false;
    let secondOperandExists = false;
    let firstOperandDotExists = false;
    let secondOperandDotExists = false;

    const display = document.querySelector('.display');

    // clearing the display
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', function () {
        firstOperandExists = false;
        operatorExists = false;
        secondOperandExists = false;
        firstOperandDotExists = false;
        secondOperandDotExists = false;
        resultExists = false;
        display.innerText = 0;
        console.log('clearing the display');
    });

    const container = document.querySelector('.container');
    container.addEventListener('click', function (e) {
        // building and displaying firstOperand
        if (!firstOperandExists && e.target.matches('.digit') && !operatorExists) {
            console.log(e.target.innerText);
            firstOperand = e.target.innerText;
            display.innerText = firstOperand;
            firstOperandExists = true;
        } else if (firstOperandExists && e.target.matches('.digit') && !operatorExists) {
            console.log(e.target.innerText);
            firstOperand = firstOperand + e.target.innerText;
            display.innerText = firstOperand;
        } else if (firstOperandExists && e.target.matches('.dot') && !operatorExists && !firstOperandDotExists) {
            console.log(e.target.innerText);
            firstOperand = firstOperand + e.target.innerText;
            firstOperandDotExists = true;
            display.innerText = firstOperand;
        }

        // operator
        if (firstOperandExists && !operatorExists && e.target.matches('.operator')) {
            console.log(e.target.innerText);
            display.innerText = e.target.innerText;
            operator = e.target.innerText;
            operatorExists = true;
        }
        // secondOperand
        if (operatorExists && !secondOperandExists && e.target.matches('.digit')) {
            console.log(e.target.innerText);
            secondOperand = e.target.innerText;
            display.innerText = secondOperand;
            secondOperandExists = true;
        } else if (secondOperandExists && e.target.matches('.digit') && !resultExists) {
            console.log(e.target.innerText);
            secondOperand = secondOperand + e.target.innerText;
            display.innerText = secondOperand;
        } else if (secondOperandExists && e.target.matches('.dot') && !secondOperandDotExists && !resultExists) {
            console.log(e.target.innerText);
            secondOperand = secondOperand + e.target.innerText;
            secondOperandDotExists = true;
            display.innerText = secondOperand;
        }
    });

    // calculating result
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', function () {
        if (firstOperandExists && secondOperandExists && operatorExists && !resultExists) {
            if (operator === '+') {
                result = Number(firstOperand) + Number(secondOperand);
                console.log(result);
                resultExists = true;
            } else if (operator === '-') {
                result = Number(firstOperand) - Number(secondOperand);
                console.log(result);
                resultExists = true;
            } else if (operator === 'x') {
                result = Number(firstOperand) * Number(secondOperand);
                console.log(result);
                resultExists = true;
            } else if (operator === '/') {
                result = Number(firstOperand) / Number(secondOperand);
                console.log(result);
                resultExists = true;
            } else {
                console.log('not working');
            }
            // displaying result
            if (resultExists) {
                display.innerText = result;
            }
        }
    });
});
