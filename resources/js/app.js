const app = () => {
    // Select DOM elements
    const   appElement          = document.querySelectorAll('.app')[0],
            calculatorElement   = document.querySelectorAll('.calculator')[0],
            numberButton        = document.querySelectorAll('[data-number]'),
            operationButton     = document.querySelectorAll('[data-operation]'),
            decimalButton       = document.querySelectorAll('[data-decimal]')[0];
            allClearButton      = document.querySelectorAll('[data-clear]')[0],
            saveButton          = document.querySelectorAll('[data-save]')[0];


    // Fade in after CSS loads
    setTimeout(() => {
        appElement.setAttribute('style', 'opacity: 1;');
    }, 500);

    class Calculator {
        constructor() {

        }
    }

    const calculator = new Calculator();

};

document.addEventListener('DOMContentLoaded', app);