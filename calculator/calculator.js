//CONSTANTS AND VARAIBLES-----------------------
const calcButtons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('.calcDisplay');
const calcSubDisplay = document.querySelector('.calcSubDisplay');

let equalActive = false;
let rawData = { firstNum: '', secondNum: '', operator: ''};
let displayedNumber = '';
let storedExpression = '';
let lastOperator = false;
let decimalExists = false;

//FUNCTIONS-------------------------------------
function add (a,b) {
    return a + b;
};
function subtract (a,b) {
    return a - b;
};
function multiply (a,b) {
    return a * b;
};
function divide (a,b) {
    return a / b;
};
function equals () {
    readRawData(); //reads numbers into object property to be used in the calculations below.
    if(rawData.firstNum.toString().length > 9){
        displayedNumber = (rawData.firstNum).toFixed(9);
    } else {
        displayedNumber = rawData.firstNum;
    }
};
function resetEverything () {
    storedExpression = '';
    displayedNumber = '';
    rawData.firstNum = '';
    rawData.secondNum = '';
    rawData.operator = '';
    lastOperator = false;
    equalActive = false;
    decimalExists = false;
};
function checkOverflow () {
    return false;
};
function checkDecimal () {
    return false;
};
function checkDivideBy0 () {
    if(rawData.secondNum === 0 && rawData.operator == 'divide') {
        alert('WHY ARE YOU DIVIDING BY 0???');
        location.reload();
        return;
    }
};
function resetBigDisplay () {
    displayedNumber = '';
};
function backspace(){
    let string = displayedNumber.toString();
    let length = string.length;
    string = string.split("");
    string = string.splice(0, length -1);
    string = string.join("");
    displayedNumber = string;
};
function readRawData () {    
    //This function is scans and stores the pair of numbers for the operator functions. This function is called by the equals function and in the case if operators are clicked.  readRawData is called when a number is typed and then ready to be stored, which is indicated by the user clicking an operator or the equals button.
    if(isNaN(parseFloat(displayedNumber, 10)) != true ) { //true = number.
        if(rawData.firstNum === '') {
            rawData.firstNum = parseFloat(displayedNumber, 10);
        } else if((rawData.secondNum === '')) {
            rawData.secondNum = parseFloat(displayedNumber, 10);
            console.log(`SECOND NUMBER: ${rawData.secondNum}`);
        }
        if(rawData.operator !== '' && rawData.secondNum !== ''){
            checkDivideBy0();
            switch(rawData.operator) {
                case 'add':
                    rawData.firstNum = add(rawData.firstNum, rawData.secondNum);
                    break;
                case 'subtract':
                    rawData.firstNum = subtract(rawData.firstNum, rawData.secondNum);
                    break;
                case 'multiply':
                    console.log('HELLO1');
                    rawData.firstNum = multiply(rawData.firstNum, rawData.secondNum);
                    break;
                case 'divide':
                    rawData.firstNum = divide(rawData.firstNum, rawData.secondNum);
                    break;
            }
            console.log(`first number: ${rawData.firstNum}`);
            console.log(`second number: ${rawData.secondNum}`);
            rawData.secondNum = '';
            rawData.operator = '';
            lastOperator = false;
        }
    }
};
function displayNumbers () {
    calcDisplay.textContent = displayedNumber;
    calcSubDisplay.textContent = storedExpression;
};
function getData (e) {
    let key ='';
    if(e.key != undefined) {
        key = e.key;  //stores the keyboard strokes.
    } else {
        key = e.target.id;  //stores the clicked div id's.
    }
    console.log(`key: ${key}`);
    if(equalActive == true) {
        console.log('equal active reseting things');
        resetEverything();
        equalActive = false;
    }
    switch(key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(checkOverflow() === false) {
                displayedNumber = displayedNumber + `${key}`;
                lastOperator = false;
            }
            break;
        case 'period':
        case '.':
            if(decimalExists === false && checkOverflow() === false) {
                displayedNumber = displayedNumber + `.`;
                decimalExists = true;
            }
            break;
        case 'sign':
            displayedNumber = displayedNumber * (-1);
            console.log(`Sign Change: ${displayedNumber}`);
            break;
        case 'reset':
        case 'Escape':
            resetEverything();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'divide':
        case '/':
            if(lastOperator == false) {
                readRawData(displayedNumber);
                if(storedExpression == '' && rawData.firstNum !== ''){
                    storedExpression = `${displayedNumber} /`;
                } else if(rawData.firstNum !== '') { 
                    storedExpression = storedExpression + ` ${displayedNumber} /`;
                }
                rawData.operator = 'divide';
                lastOperator = true;
                decimalExists = false;
            }
            resetBigDisplay();
            break;
        case 'multiply':
        case '*':
            if(lastOperator == false) {
                readRawData(displayedNumber);
                if(storedExpression == '' && rawData.firstNum !== ''){
                    storedExpression = `${displayedNumber} *`;
                } else if(rawData.firstNum !== '') { 
                    storedExpression = storedExpression + ` ${displayedNumber} *`;
                }
                rawData.operator = 'multiply';
                lastOperator = true;
                decimalExists = false;
            }
            resetBigDisplay();
            break;
        case 'add':
        case '+':
            if(lastOperator == false) {
                readRawData(displayedNumber);
                if(storedExpression == '' && rawData.firstNum !== ''){
                    storedExpression = `${displayedNumber} +`;
                } else if (rawData.firstNum !== ''){ 
                    storedExpression = storedExpression + ` ${displayedNumber} +`;
                }
                rawData.operator = 'add';
                lastOperator = true;
                decimalExists = false;
            }
            resetBigDisplay();
            break;            
        case 'subtract':
        case '-':
            if(lastOperator == false) {
                readRawData(displayedNumber); //sets up rawData.firstNum
                if(storedExpression == '' && rawData.firstNum !== ''){
                    storedExpression = `${displayedNumber} -`;
                } else if (rawData.firstNum !=='') {
                    storedExpression = storedExpression + ` ${displayedNumber} -`;
                }
                rawData.operator = 'subtract';
                lastOperator = true;
                decimalExists = false;
            }
            resetBigDisplay();
            break;
        case 'percentage':
            displayedNumber = parseFloat(displayedNumber, 10) / 100;
            break;
        case 'equals':
        case 'Enter':
        case '=':
            if(lastOperator == false) {
                console.log(`rawData first: ${rawData.firstNum}`);
                console.log(`displayedNumber: ${displayedNumber}`);
                if(rawData.firstNum !== '') {
                    storedExpression = storedExpression + ` ${displayedNumber} =`;
                    console.log('HELLO equals');
                }
                equals();
                lastOperator = true;
                equalActive = true;
            }
            break;
    }
    displayNumbers(displayedNumber, storedExpression);
    console.log(`OPERATOR: ${rawData.operator}`);
    console.log({storedExpression});
    e.stopPropagation();
    e.preventDefault();
};
//SCRIPTS---------------------------------------
window.addEventListener('keydown', getData);
calcButtons.forEach(calcButtons => calcButtons.addEventListener('click', getData));
