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
        case "buttonAdd":
            result = add(a, b);
            break;
        case "buttonSubtract":
            result = subtract(a, b);
            break;
        case "buttonMultiply":
            result = multiply(a, b);
            break;
        case "buttonDivide":
            result = divide(a, b);
    }
    return result;
};

function evalNumber(numberClicked) {
    typeBuffer += numberClicked;
    display.textContent = typeBuffer;
    console.log(`Last digit(${numberClicked}) is added to typeBuffer. Display refreshed`);    
    console.log(typeBuffer, typeBuffer.length);
    // Might need separate variable to store real number, not text
    // Currently dec point doesn't work
    // Also need to limit number of digits so they stay within the display
};

function evalMath(action) {
    if (calcBuffer.length == 0) {
        numberEntered = parseInt (typeBuffer, 10);
        calcBuffer.push(numberEntered);
        mathBuffer = action;
        typeBuffer = "0";
        display.textContent = typeBuffer;
    } else {
        numberEntered = parseInt (typeBuffer, 10);
        calcBuffer.push(numberEntered);
        mathBuffer = action;
        tempResult = operate(mathBuffer, calcBuffer[0], calcBuffer[1]);    
        typeBuffer = tempResult.toString();    
        display.textContent = typeBuffer;
    }
    console.log(calcBuffer);
    console.log(mathBuffer);
    console.log(`Math action of ${action} is performed. Buffers reset`)
};
// After the Math action is performed the first element of calcBuffer should be removed
// IMPORTANT - calculator performs last action pressed so for example
// '3' '+' '2' '-' gives '1', not '5' as it subtracts not adds
// Also after Math action typing numbers doesn't work as intended

function evalClear () {
    typeBuffer = "0";
    display.textContent = typeBuffer;
    console.log(typeBuffer);
    console.log('All buffers reset. Display reset')
};

let typeBuffer = "0"; // Stores numbers typed till the math button click (Make it an array?)
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
            if (typeBuffer == "0" || calcBuffer.length > 0) {
                typeBuffer = "";
            }
            if (typeBuffer.length < 9) {
                evalNumber(e.target.textContent);
            };
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