document.addEventListener('DOMContentLoaded', function () {
    const clear = document.querySelector('.clear');
    const display = document.querySelector('.display');

    clear.addEventListener('click', function () {
        display.innerText = 0;
    });
});
