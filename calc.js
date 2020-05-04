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
});
