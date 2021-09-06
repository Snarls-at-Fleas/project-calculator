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

function evalNumber(numberClicked) {
    console.log(`Last digit(${numberClicked}) is added to typeBuffer. Display refreshed`);
    typeBuffer += numberClicked;
    display.textContent = typeBuffer;
    // Might need separate variable to store real number, not text
    // Currently dec point doesn't work
};

function evalMath(action) {
    console.log(`Math action of ${action} is performed. Buffers reset`)
};

function evalClear () {
    console.log('All buffers reset. Display reset')
};

let typeBuffer = ""; // Stores numbers typed till the math button click (Make it an array?)
let calcBuffer = []; // Stores last two numbers entered. They go here after math button click
let mathBuffer = ""; // Stores last math action after math button click
let buttons = document.querySelector(".buttons");
let display = document.querySelector(".display");
buttons.addEventListener('click', (e) => {
    switch (e.target.id) {
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
            evalNumber(e.target.textContent);
            break;
        case "buttonAdd":
        case "buttonSub":
        case "buttonMulty":
        case "buttonDiv":
        case "buttonEquals":
            evalMath(e.target.id);
            break;
        case "buttonClear":
            evalClear();
    }
    // There are three possible variants of clicks: numbers (including dec point), 
    // math (including equals) & clear
    //
    // evalNumber() function adds last number typed to typeBuffer then refreshes display
    // evalMath() function checks if there an action in mathBuffer, if yes - calls operate()
        // then resets the mathBuffer and puts last action clicked in it
        // unless it was Equals button then no action is added
    // evalClear() function resets all buffers & refreshes display
});