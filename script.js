


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
            //console.log(buttonID);
            displayArray.push(currentPress);
            displayValue = displayArray.join('');
            textBox.value = displayValue;
            break;
        // }
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            operator = currentPress;
            inputOne = displayValue;
            console.log('inputOne ' + inputOne)
            displayArray = [];
            displayValue = '';
            break;

    }
    inputTwo = displayValue;
    console.log('inputTwo ' + inputTwo)
    switch (buttonID) {
        case 'equals':
            switch (operator) {
                case '+':
                    resultValue = add(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    displayValue = resultValue;
                    textBox.value = displayValue;
                    break;
                case '-':
                    resultValue = subtract(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    displayValue = resultValue;
                    textBox.value = displayValue;
                    break;
                case '*':
                    resultValue = multiply(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    displayValue = resultValue;
                    textBox.value = displayValue;
                    break;
                case '/':
                    resultValue = divide(Number(inputOne), Number(inputTwo));
                    console.log(resultValue);
                    displayValue = resultValue;
                    textBox.value = displayValue;
                    break;
            }
            displayValue = resultValue;

    }
    //}
});

//console.log(displayValue);


// displayArray = [];
// displayValue = '';
// //console.log(buttonID);
// displayArray.push(currentPress);
// displayValue = displayArray.join('');
// textBox.value = displayValue
// //console.log(displayValue);
// inputTwo = displayValue;
// break;

// })

function clearDisplay() {
    textBox.value = '';
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