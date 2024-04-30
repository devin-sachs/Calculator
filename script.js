


// Calculator buton functions - need to review for functionality
// this is a starting point 

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

//variables to update display 

let inputOne;
let inputTwo;
let operator;
let displayArray = [];

//

let textBox = document.querySelector('.textbox');
let answerBox = document.querySelector('.answerbox');


clearDisplay();
//textBox = textBoxID.value // for some teason this isn't working so far. 
//document.body.appendChild(textBox); // this is not neccesary 

let btn_container = document.querySelector('.btn-container');

btn_container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    buttonID = event.target.id.toLowerCase();
    currentPress = event.target.innerText
    //console.log(currentPress);
    switch (buttonID) {
        case 'clear':
            //console.log(buttonID);
            clearDisplay();
            break;
        //default:
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
        case 'decimal':

            //TO DO: 
            //Try to detect if multiple decimals are input
            // if (textBox.textContent.includes()) {
            // alert('You can\'t enter multiple decimals points!'); // need a regular expression to catch all '.' characters after the first one. 
            // clearDisplay();
            //     break;

            // };
            displayArray.push(currentPress);
            displayValue = displayArray.join('');
            textBox.textContent = displayValue;
            break;
        case 'del':
            displayArray.pop();
            displayValue = displayArray.join('');
            textBox.textContent = displayValue;
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            operator = currentPress;
            textBox.textContent = ' ' + operator;
            inputOne = displayValue;
            console.log('inputOne ' + inputOne)
            displayArray = [];
            displayValue = null;
            break;

        case 'sin':
        case 'integral':
            textBox.textContent = 'LOL just kidding, this is just a place holder to fill the space';


    }
    inputTwo = displayValue;
    console.log('inputTwo ' + inputTwo)
    switch (buttonID) {
        case 'equals':
            switch (operator) {
                case '+':
                    resultValue = add(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    roundedResult = parseFloat(resultValue.toFixed(9));
                    textBox.textContent = inputOne + ' ' + operator + ' ' + inputTwo + ' = '
                    answerBox.textContent = roundedResult;
                    break;
                case '-':
                    resultValue = subtract(Number(inputOne), Number(inputTwo));

                    console.log(resultValue);
                    roundedResult = parseFloat(resultValue.toFixed(9));
                    textBox.textContent = inputOne + ' ' + operator + ' ' + inputTwo + ' = '
                    answerBox.textContent = roundedResult;
                    inputOne = roundedResult;
                    break;
                case '*':
                    resultValue = multiply(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    roundedResult = parseFloat(resultValue.toFixed(9));
                    textBox.textContent = inputOne + ' ' + operator + ' ' + inputTwo + ' = '
                    answerBox.textContent = roundedResult;
                    inputOne = roundedResult;
                    break;
                case '/':
                    resultValue = divide(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    roundedResult = parseFloat(resultValue.toFixed(9));
                    //displayValue = resultValue;
                    //previousOp = $
                    textBox.textContent = inputOne + ' ' + operator + ' ' + inputTwo + ' = '
                    answerBox.textContent = roundedResult;
                    inputOne = roundedResult;
                    //textBox.textContent = '';
                    break;
                default: alert('please enter a valid expression');
                    clearDisplay();
            }
            displayValue = resultValue;


            // this prevents the = sign from performing any unexpected operations after the inital one.
            inputOne = '';
            inputTwo = '';
    }
});



function clearDisplay() {
    textBox.textContent = '';
    answerBox.textContent = '';
    displayArray = [];
    displayValue = undefined;
    inputOne = undefined;
    inputTwo = undefined;
}

function evalResult() {
    switch (buttonID) {
        case 'add':
            resultValue = add(Number(inputOne), Number(inputTwo));
            console.log(resultValue);
            break;
        case 'subtract':
            resultValue = subtract(Number(inputOne), Number(inputTwo));
            console.log(resultValue);
            break;
        case 'multiply':
            resultValue = multiply(Number(inputOne), Number(inputTwo));
            console.log(resultValue);
            break;
        case 'divide':
            resultValue = divide(Number(inputOne), Number(inputTwo));
            console.log(resultValue);
            break;
    }
}


//TO DO:
// Handle large inputs better
// Screen overflows outside of div if the input is too large




// const sum = function (arr) {
//     return sumArray = arr.reduce((acc, current) =>
//         acc + current, 0);
// };

// const multiply = function (arr) {
//     return productArray = arr.reduce((acc, current) =>
//         acc * current, 1);
// };

// const divide = function (arr) {
//     return productArray = arr.reduce((acc, current) =>
//         acc / current, 1);
// }