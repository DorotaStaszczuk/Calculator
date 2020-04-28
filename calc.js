document.addEventListener('DOMContentLoaded', function () {
    let result = 0;
    let operator;
    let firstOperand;
    let secondOperand;

    const clear = document.querySelector('.clear');
    const display = document.querySelector('.display');

    clear.addEventListener('click', function () {
        display.innerText = 0;
        console.log('clearing the display');
    });

    const container = document.querySelector('.container');
    container.addEventListener('click', function (e) {
        if (e.target.matches('.digit')) {
            console.log(e.target.innerText);
            display.innerText = e.target.innerText;
        } else if (e.target.matches('.operator')) {
            console.log(e.target.innerText);
            display.innerText = e.target.innerText;
        }
    });
});
