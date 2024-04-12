


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
        textBox.value = textBox.value + '0';
    }
    else if (event.target.id.toLowerCase() === 'one') {
        textBox.value = textBox.value + '1';
    }
    else if (event.target.id.toLowerCase() === 'two') {
        textBox.value = textBox.value + '2';
    }
    else if (event.target.id.toLowerCase() === 'three') {
        textBox.value = textBox.value + '3';
    }
    else if (event.target.id.toLowerCase() === 'four') {
        textBox.value = textBox.value + '4';
    }
    else if (event.target.id.toLowerCase() === 'five') {
        textBox.value = textBox.value + '5';
    }
    else if (event.target.id.toLowerCase() === 'six') {
        textBox.value = textBox.value + '6';
    }
    else if (event.target.id.toLowerCase() === 'seven') {
        textBox.value = textBox.value + '7';
    }
    else if (event.target.id.toLowerCase() === 'eight') {
        textBox.value = textBox.value + '8';
    }
    else if (event.target.id.toLowerCase() === 'nine') {
        textBox.value = textBox.value + '9';
    }
    else if (event.target.id.toLowerCase() === 'add') {
        textBox.value = textBox.value + '+';
    }
    else if (event.target.id.toLowerCase() === 'subtract') {
        textBox.value = textBox.value + '-';
    }
    else if (event.target.id.toLowerCase() === 'multiply') {
        textBox.value = textBox.value + '*';
    }
    else if (event.target.id.toLowerCase() === 'divide') {
        textBox.value = textBox.value + '/';
    }
    else if (event.target.id.toLowerCase() === 'decimal') {
        textBox.value = textBox.value + '.';
    }
    else if (event.target.id.toLowerCase() === 'equals') {
        textBox.value = textBox.value + '=';
    }
    else if (event.target.id.toLowerCase() === 'clear') {
        textBox.value = '';
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