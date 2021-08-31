function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    let result = 0;
    switch (operator) {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
    }
    return result;
}
let lastDigitClicked = "";
let displayContent= "";
let numbersTyped = [];
let operator = "";
let buttons = document.querySelector('.buttons');
let display = document.querySelector('.display');
buttons.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'buttonOne':
            lastDigitClicked = "1";
            break;
        case 'buttonTwo':
            lastDigitClicked = "2";
            break;
        case 'buttonThree':
            lastDigitClicked = "3";
            break;
        case 'buttonFour':
            lastDigitClicked = "4";
            break;
        case 'buttonFive':
            lastDigitClicked = "5";
            break;
        case 'buttonSix':
            lastDigitClicked = "6";
            break;
        case 'buttonSeven':
            lastDigitClicked = "7";
            break;
        case 'buttonEight':
            lastDigitClicked = "8";
            break;
        case 'buttonNine':
            lastDigitClicked = "9";
            break;
        case 'buttonZero':
            lastDigitClicked = "0";
            break;
        case 'buttonClear':
            displayContent = "";
            lastDigitClicked = "";
            numbersTyped = [];
            break;
        case 'buttonAdd':
            numbersTyped.push(displayContent);
            displayContent = "+";
            lastDigitClicked = "";
            if (numbersTyped.length == 2) {
                let a = parseInt(numbersTyped[0], 10);
                let b = parseInt(numbersTyped[1], 10);
                console.log(a, b);
                displayContent = operate(operator, a, b);
                console.log(displayContent);
                numbersTyped = [];
                numbersTyped.push(displayContent);
                console.log(numbersTyped, displayContent);
            }
            operator = "add";
            break;
        case 'buttonSub':
            numbersTyped.push(displayContent);
            displayContent = "-";
            lastDigitClicked = "";
            if (numbersTyped.length == 2) {
                let a = parseInt(numbersTyped[0], 10);
                let b = parseInt(numbersTyped[1], 10);
                console.log(a, b);
                displayContent = operate(operator, a, b);
                console.log(displayContent);
                numbersTyped = [];
            }
            operator = "subtract";
            break;
        case 'buttonMulty':
            numbersTyped.push(displayContent);
            displayContent = "*";
            lastDigitClicked = "";
            if (numbersTyped.length == 2) {
                let a = parseInt(numbersTyped[0], 10);
                let b = parseInt(numbersTyped[1], 10);
                console.log(a, b);
                displayContent = operate(operator, a, b);
                console.log(displayContent);
                numbersTyped = [];
            }
            operator = "multiply";
            break;
        case 'buttonDiv':
            numbersTyped.push(displayContent);
            displayContent = "/";
            lastDigitClicked = "";
            if (numbersTyped.length == 2) {
                let a = parseInt(numbersTyped[0], 10);
                let b = parseInt(numbersTyped[1], 10);
                console.log(a, b);
                displayContent = operate(operator, a, b);
                console.log(displayContent);
                numbersTyped = [];
            }
            operator = "divide";
    };
    if (displayContent.length < 10) {
        displayContent += lastDigitClicked;
    };
    
    display.textContent = displayContent;
});