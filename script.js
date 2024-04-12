


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

const btn_container = document.getElementById('btn-container');
btn_container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    textBox = querySelector('textbox');

    if (event.target.id.toLowerCase() === 'one') {

    }

    else if (event.target.id.toLowerCase() === 'two') {

    }

    else if (event.target.id.toLowerCase() === 'three') {

    }
    else if (event.target.id.toLowerCase() === 'four') {

    }
    else if (event.target.id.toLowerCase() === 'five') {

    }
    else if (event.target.id.toLowerCase() === 'six') {

    }
    else if (event.target.id.toLowerCase() === 'seven') {

    }
    else if (event.target.id.toLowerCase() === 'eight') {

    }
    else if (event.target.id.toLowerCase() === 'nine') {

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