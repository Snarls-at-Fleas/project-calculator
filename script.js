function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

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
};

// Need to add a way to correctly enter numbers with dec point
// 

function evaluateClick(id) {
    switch (id) {
        case "buttonOne":
        case "buttonTwo":
        case "buttonThree":
        case "buttonFour":
        case "buttonFive":
        case "buttonSix":
        case "buttonSeven":
        case "buttonEight":
        case "buttonNine":
        case "buttonZero":
        case "buttonDecPoint":
            let digitClicked = document.getElementById(id);
            currentBuffer += digitClicked.textContent;
            currentNumber = parseFloat(currentBuffer);
            displayContent.textContent = currentNumber;
            console.log(currentBuffer, currentNumber);
            break;
    };
};

let currentNumber = 0;
let currentBuffer = "";
let displayContent = document.querySelector(".display");
let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    evaluateClick (e.target.id);
});