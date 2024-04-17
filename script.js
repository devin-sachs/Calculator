


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
const displayArray = [];

//

textBox = document.getElementById('textbox');

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
    console.log(currentPress);
    displayArray.push(currentPress);
    displayValue = displayArray.join('');

    switch (buttonID) {
        case 'clear':
            console.log(buttonID);
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
            console.log(buttonID);
            textBox.value = displayValue
            console.log(displayValue);
    }


});


//     if (buttonID === 'zero') {

//         if (!inputOne) {
//             currentValue = displayValue.push('0');
//             textBox.value = currentValue;
//             //inputOne = displayValue;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {

//             //typeof inputTwo !== 'undefined' && typeof inputTwo == 'undefined'
//             currentValue = displayValue.push('0');
//             textBox.value += displayValue;
//             //inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'one') {
//         if (!inputOne) {
//             currentValue = displayValue.push('1');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('1');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'two') {
//         if (!inputOne) {
//             currentValue = displayValue.push('2');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('2');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'three') {

//         if (!inputOne) {
//             currentValue = displayValue.push('3');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('3');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'four') {

//         if (!inputOne) {
//             currentValue = displayValue.push('4');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('4');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'five') {

//         if (!inputOne) {
//             currentValue = displayValue.push('5');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('5');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'six') {
//         if (!inputOne) {
//             currentValue = displayValue.push('6');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('6');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'seven') {
//         if (!inputOne) {
//             currentValue = displayValue.push('7');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('7');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'eight') {
//         if (!inputOne) {
//             currentValue = displayValue.push('8');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('8');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'nine') {
//         if (!inputOne) {
//             currentValue = displayValue.push('9');
//             textBox.value = displayValue;
//             inputOne = textBox.value;
//             console.log('inputOne = ' + inputOne);
//         }
//         else if (inputOne && !inputTwo) {
//             currentValue = displayValue.push('9');
//             textBox.value = displayValue;
//             inputTwo = textBox.value;
//             console.log('inputTwo = ' + inputTwo);
//         }
//     }
//     else if (buttonID === 'add') {
//         textBox.value = '+';
//         operator = textBox.value;
//         console.log(inputOne);
//         console.log(inputTwo);
//     }
//     else if (buttonID === 'subtract') {
//         textBox.value = '-';
//         operator = textBox.value;
//     }
//     else if (buttonID === 'multiply') {
//         textBox.value = '*';
//         operator = textBox.value;
//     }
//     else if (buttonID === 'divide') {
//         textBox.value = '/';
//         operator = textBox.value;

//     }
//     else if (buttonID === 'decimal') {
//         textBox.value = '.';
//         operator = textBox.value;
//     }
//     else if (buttonID === 'equals') {
//         textBox.value = '=';
//         evalResult();

//     }
//     else if (buttonID === 'clear') {
//         clearDisplay();
//     }



// })

function clearDisplay() {
    textBox.value = '';
    inputOne = undefined;
    inputTwo = undefined;
}

function evalResult() {
    switch (operator) {
        case '+':
            // add code to sum numbers 
            // console.log(operator);
            // console.log(inputOne);
            // console.log(inputTwo);
            textBox.value = add(Number(inputOne), Number(inputTwo));
            break;
        case '-':
            // console.log(operator);
            // console.log(inputOne);
            // console.log(inputTwo);
            textBox.value = subtract(Number(inputOne), Number(inputTwo));
            break;
        case '*':
            // console.log(operator);
            // console.log(inputOne);
            // console.log(inputTwo);
            textBox.value = multiply(Number(inputOne), Number(inputTwo));
            break;
        case '/':
            // console.log(operator);
            // console.log(inputOne);
            // console.log(inputTwo);
            textBox.value = divide(Number(inputOne), Number(inputTwo));
            break;
    }
}





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