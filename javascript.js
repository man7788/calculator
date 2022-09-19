"use strict";
// --------------------Functions--------------------
function add(term1, term2) {
  let sum = term1 + term2;
  return sum;
}

function subtract(baseTerm, subtractFromBase) {
  let difference = baseTerm - subtractFromBase;
  return difference;
 }

function multiply(factor1, factor2) {
  let product = factor1 * factor2;
  return product;
}

function divide(dividend, divisor) {
  let quotient = dividend / divisor;
  return quotient;
}

function operate(inputNum1, inputNum2, mathOperator) {
  let operatorList = {
    '+': 'add',
    '−': 'subtract',
    '×': 'multiply',
    '÷': 'divide',
  };
  mathOperator = operatorList[mathOperator];
  let sum;

  switch (mathOperator) {
    case 'add':
      sum = add(inputNum1, inputNum2);
      return sum;
    case 'subtract':
      sum = subtract(inputNum1, inputNum2);
      return sum;
    case 'multiply':
      sum = multiply(inputNum1, inputNum2);
      return sum;
    case 'divide':
      sum = divide(inputNum1, inputNum2);
      return sum;
  };
}

// --------------------Display--------------------
const displayRespond = document.querySelector('#displayWindow')

// --------------------Buttons--------------------
let regexNum = /[0-9]/;
let regexOperator = /[×÷+−]/;
let buttonRowList = [];

let i = 0;
for (i = 0; i < 4; i++) {
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('id', `buttonRow${i}`);
  buttonArea.appendChild(buttonRow);
  buttonRowList.push(buttonRow);
}

let buttonList = ['a', 7, 8, 9, '×', 'a', 4, 5, 6, '÷', 
   'a', 1, 2, 3, '+', 'a', 0, '.', '−', '=',];
  
for (i = 0; i < 5; i++) {
  const clickButton = document.createElement('div');
  if (regexNum.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('numberButton');
    clickButton.textContent = buttonList[i];
  } else if (regexOperator.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('operatorButton');
    clickButton.textContent = buttonList[i];
  } else {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('placeHolder');
    clickButton.textContent = buttonList[i];
  };
  buttonRowList[0].appendChild(clickButton);
};

for (i = 5; i < 10; i++) {
  const clickButton = document.createElement('div');
  if (regexNum.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('numberButton');
    clickButton.textContent = buttonList[i];
  } else if (regexOperator.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('operatorButton');
    clickButton.textContent = buttonList[i];
  } else {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('placeHolder');
    clickButton.textContent = buttonList[i];
  };
  buttonRowList[1].appendChild(clickButton);
};

for (i = 10; i < 15; i++) {
  const clickButton = document.createElement('div');
  if (regexNum.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('numberButton');
    clickButton.textContent = buttonList[i];
  } else if (regexOperator.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('operatorButton');
    clickButton.textContent = buttonList[i];
  } else {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('placeHolder');
    clickButton.textContent = buttonList[i];
  };
  buttonRowList[2].appendChild(clickButton);
};

for (i = 15; i < 20; i++) {
  const clickButton = document.createElement('div');
  if (regexNum.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('numberButton');
    clickButton.textContent = buttonList[i];
  } else if (regexOperator.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('operatorButton');
    clickButton.textContent = buttonList[i];
  } else if (buttonList[i] === '=') {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('operateNow');
    clickButton.textContent = buttonList[i];
  } else {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('placeHolder');
    clickButton.textContent = buttonList[i];
  }
  buttonRowList[3].appendChild(clickButton);
};

// // --------------------User Input--------------------
const clickNumber = document.querySelectorAll('.numberButton');
const clickOperator = document.querySelectorAll('.operatorButton');
const clickOperateNow = document.querySelector('.operateNow');
let leftOfOperator 
let rightOfOperator;
let foundOperator;
let regexLeft = /\d+/;
let regexRight = /\d+$/;

function appendNumber() {
  displayRespond.textContent = displayRespond.textContent + this.textContent;
}

function appendOperator() {
  displayRespond.textContent = displayRespond.textContent + this.textContent;
  for (const opt of clickOperator) {
    opt.removeEventListener('click', appendOperator);
  };
};

function findNumber() {
leftOfOperator = regexLeft.exec(displayRespond.textContent);
rightOfOperator = regexRight.exec(displayRespond.textContent);
foundOperator = regexOperator.exec(displayRespond.textContent);
leftOfOperator = Number(leftOfOperator[0]);
rightOfOperator = Number(rightOfOperator[0]);
let sumResult = operate(leftOfOperator, rightOfOperator, foundOperator);
console.log(sumResult);
displayRespond.textContent = sumResult;
};

for (const num of clickNumber) {
  num.addEventListener('click', appendNumber);
};

for (const opt of clickOperator) {
  opt.addEventListener('click', appendOperator)
};

clickOperateNow.addEventListener('click', findNumber);

// let test = '22222+44444';
// let regexTest = /\+/;
// let testResult = regexTest.exec(test);
// console.log(testResult);


// Listen for clicks, record every number as number_input: 1, before any operator input clicked
  // <First event listener>
    // Create number input 1 <div>;
    // Create operator <div>;
    // Add id to number input 1 <div>;
    // Add id to operator <div>;
    // Query Select only numbers;
    // For loop Query Select list;
    // Add eventListener to for loop Constant;
    // Display text content from for loop constant;
    // Concatenate number to number input 1 <div>;
    // If input is operator
    // Store operator to operator <div>
    // Stop first event listener>

// As operator clicked, break number_input: 1 listener, record the operator, break operator listen
// Listen for clicks, record every number as number_input: 2, before = button is clicked
// As = button clicked, convert number input 1 & 2 to nunber, match operator input to operator function
// run operator() with argument, ouput result to display

  // <Second event listener>
    // Create number input 2 <div>;
    // Add id to number input 2 <div>;
    // Query Select only numbers;
    // For loop Query Select list;
    // Add eventListener to for loop Constant;
    // Display text content from for loop constant;
    // Concatenate number to number input 1 <div>;
    // If input is =;
    // Pull values from <div>'s
    // Store <div>'s value in variables;
    // Match number parameters with number variables;
    // Match operator parameter with operator variable;
    // Run operator() with pulled value variables;
    // Display operator() result;
  
