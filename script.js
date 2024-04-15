


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
let displayValue;

//

textBox = document.getElementById('textbox');
//document.body.appendChild(textBox); // this is not neccesary 

let btn_container = document.getElementById('btn-container');
btn_container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    if (event.target.id.toLowerCase() === 'zero') {

        if (typeof inputOne == 'undefined') {
            textBox.value = '0';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (typeof variable !== 'undefined' && typeof inputTwo == 'undefined') {
            textBox.value = '0';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'one') {
        if (!inputOne) {
            textBox.value = '1';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '1';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'two') {
        if (!inputOne) {
            textBox.value = '2';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '2';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'three') {

        if (!inputOne) {
            textBox.value = '3';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '3';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'four') {

        if (!inputOne) {
            textBox.value = '4';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '4';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'five') {

        if (!inputOne) {
            textBox.value = '5';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '5';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'six') {
        if (!inputOne) {
            textBox.value = '6';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '6';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'seven') {
        if (!inputOne) {
            textBox.value = '7';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '7';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'eight') {
        if (!inputOne) {
            textBox.value = '8';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '8';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'nine') {
        if (!inputOne) {
            textBox.value = '9';
            inputOne = textBox.value;
            console.log('inputOne = ' + inputOne);
        }
        else if (inputOne && !inputTwo) {
            textBox.value = '9';
            inputTwo = textBox.value;
            console.log('inputTwo = ' + inputTwo);
        }
    }
    else if (event.target.id.toLowerCase() === 'add') {
        textBox.value = '+';
        operator = textBox.value;
        console.log(inputOne);
        console.log(inputTwo);
    }
    else if (event.target.id.toLowerCase() === 'subtract') {
        textBox.value = '-';
        operator = textBox.value;
    }
    else if (event.target.id.toLowerCase() === 'multiply') {
        textBox.value = '*';
        operator = textBox.value;
    }
    else if (event.target.id.toLowerCase() === 'divide') {
        textBox.value = '/';
        operator = textBox.value;
    }
    else if (event.target.id.toLowerCase() === 'decimal') {
        textBox.value = '.';
        operator = textBox.value;
    }
    else if (event.target.id.toLowerCase() === 'equals') {
        textBox.value = '=';
        switch (operator) {
            case '+':
                // add code to sum numbers 
                console.log(operator);
                console.log(inputOne);
                console.log(inputTwo);
                textBox.value = add(Number(inputOne), Number(inputTwo));
                break;
            case '-':
                console.log(operator);
                console.log(inputOne);
                console.log(inputTwo);
                textBox.value = subtract(Number(inputOne), Number(inputTwo));
                break;
            case '*':
                console.log(operator);
                console.log(inputOne);
                console.log(inputTwo);
                textBox.value = multiply(Number(inputOne), Number(inputTwo));
                break;
            case '/':
                console.log(operator);
                console.log(inputOne);
                console.log(inputTwo);
                textBox.value = divide(Number(inputOne), Number(inputTwo));
                break;


        }


    }
    else if (event.target.id.toLowerCase() === 'clear') {
        textBox.value = '';
        inputOne = undefined;
        inputTwo = undefined;
    }



})










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