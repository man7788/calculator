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
  if (divisor === 0) {
    return 'Divide by zero error'
  };
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
displayRespond.textContent = 0;

// --------------------Buttons--------------------
let regexNum = /[0-9]/;
let regexOperator = /[×÷+−]/;
let regexCA = /CA/;
let regexDecimal = /./;
let buttonRowList = [];

let i = 0;
for (i = 0; i < 4; i++) {
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('id', `buttonRow${i}`);
  buttonArea.appendChild(buttonRow);
  buttonRowList.push(buttonRow);
}

let buttonList = ['a', 7, 8, 9, '×', 'a', 4, 5, 6, '÷', 
   'a', 1, 2, 3, '+', 'CA', 0, '.', '−', '=',];
  
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
  } else if (regexCA.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('clearAll');
    clickButton.textContent = buttonList[i];
  } else if (regexDecimal.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('decimalButton');
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
let regexLeft = /\d*\.?\d+/;
let regexRight = /\d*\.*\d+$/;
let regexPattern = /\d+[×÷+−]\d/;
let regexDecimalRight = /[×÷+−<=?]\d+\./;
let regexDecimalLeft = /\d+\./;

// let testFor = '2+2'
// let testDone = regexLeft.exec(testFor);
// let testDone2 = regexRight.exec(testFor);
// console.log(testDone + 'left');
// console.log(testDone2 + 'right');

let testDigit = document.createElement('div');
const immediateOperator = document.querySelectorAll('.operatorButton');
const immediateNumber = document.querySelectorAll('.numberButton');
let imdDisplay = '';
const clickClearAll = document.querySelector('.clearAll');
const zeroReset = document.querySelector('#buttonArea');
const clickDecimal = document.querySelector('.decimalButton');

function appendNumber() {
  imdDisplay += this.textContent;
  displayRespond.textContent = imdDisplay;
  testDigit.textContent += this.textContent;
  console.log('appnum working');
  console.log(testDigit.textContent);
};
// Active: appendNumber(), 272
        // appendOperator(), 276

function appendOperator() {
  if (displayRespond.textContent !== '0') {
    displayRespond.textContent += this.textContent;
    testDigit.textContent += this.textContent;
    // Prevent doubling operator
    for (const opt of clickOperator) {
      opt.removeEventListener('click', appendOperator);
    };
    // No longer useful for immediate calculation
    for (const num of clickNumber) {
      num.removeEventListener('click', appendNumber);
    };
    for (const num of clickNumber) {
      num.addEventListener('click', appendNumber2);
    };
    // Go replace if repeated operator input
    for (const opt of clickOperator) {
      opt.addEventListener('click', replaceOperator);
    };
    console.log('appopt working');
    console.log(testDigit.textContent);
  };
};
// Active: appendNumber2(), 183
        // replaceOperator(), 187

function replaceOperator() {
  console.log('reopt working');
  console.log(testDigit.textContent);
  testDigit.textContent = testDigit.textContent.replace(regexOperator, this.textContent);
};
// Active: appendNumber2(), 183
        // replaceOperator(), 187


let testFor = '5';
let testDone = regexDecimalLeft.exec(testFor);
console.log(testDone);

function appendNumber2() {
  if (!regexDecimalRight.test(displayRespond.textContent)) {
    clickDecimal.addEventListener('click', appendDecimal);
    console.log('yes');
  } else {
    clickDecimal.removeEventListener('click', appendDecimal);
  };
  displayRespond.textContent += this.textContent;
  testDigit.textContent += this.textContent;
// No longer useful for immediate calculation
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceOperator);
  };
  for (const imopt of immediateOperator) {
    imopt.addEventListener('click', appendImdOperator);
  };
  console.log('appnum2 working');
  console.log(testDigit.textContent);
};
// Active: appendNumber2(), 183
        // appendImdOperator(), 217

// --------------------------------------------
// Turnaround: From finalResult()
        // Active: appendImdNumber(), 213
                // appendImdOperator(), 217 
// --------------------------------------------
// Turnaround: From appendImdNumber()
        // Active: appendImdNumber(), 213
                // appendImdOperator(), 269

function appendImdOperator() {
  console.log('imopt working');
  console.log(testDigit.textContent);
  finalNumber();
  imdDisplay = '';
  testDigit.textContent = displayRespond.textContent + this.textContent;
  // No longer useful for immediate calculation
  for (const num of clickNumber) {
    num.removeEventListener('click', appendNumber2);
  };
  for (const num of clickNumber) {
    num.addEventListener('click', appendImdNumber);
  };
  // Prevent doubling operator
  for (const opt of clickOperator) {
    opt.removeEventListener('click', appendImdOperator);
  };
  // Go replace if repeated operator input
  for (const opt of clickOperator) {
    opt.addEventListener('click', replaceImdOperator);
  };
};
// Active: appendImdNumber(), 213
        // replaceImdOperator(), 243

function replaceImdOperator() {
  console.log('reimopt working');
  console.log(testDigit.textContent);
  testDigit.textContent = testDigit.textContent.replace(regexOperator, this.textContent);
};
// Active: appendImdNumber(), 213
        // replaceImdOperator(), 243

function appendImdNumber() {
  imdDisplay += this.textContent;
  displayRespond.textContent = imdDisplay;
  testDigit.textContent += this.textContent;
  if (!regexDecimalLeft.test(displayRespond.textContent)) {
    clickDecimal.addEventListener('click', appendDecimal);
    console.log('yes');
  } else {
    clickDecimal.removeEventListener('click', appendDecimal);
  };
  console.log('imnum working');
  console.log(testDigit.textContent);
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceImdOperator);
  };
  for (const opt of clickOperator) {
    opt.addEventListener('click', appendImdOperator);
  };
};
// Active: appendImdNumber(), 213
        // appendImdOperator(), 269

function roundToTwo(num) {
  return +(Math.round(num + "e+6")  + "e-6");
}

function finalNumber() {
  if (regexPattern.test(testDigit.textContent)) {
    console.log('finalNumber working');
    leftOfOperator = regexLeft.exec(testDigit.textContent);
    rightOfOperator = regexRight.exec(testDigit.textContent);
    foundOperator = regexOperator.exec(testDigit.textContent);
    leftOfOperator = Number(leftOfOperator[0]);
    rightOfOperator = Number(rightOfOperator[0]);
    // console.log(testDigit.textContent);
    // console.log(leftOfOperator);
    // console.log(rightOfOperator);
    // console.log(foundOperator);
    let sumResult = operate(leftOfOperator, rightOfOperator, foundOperator);
    console.log(isNaN(sumResult));
    if (isNaN(sumResult)) {
      displayRespond.textContent = sumResult;
      zeroReset.addEventListener('click', () => {
        zeroReset.addEventListener('click', clearAll)
      });
    } else { sumResult = roundToTwo(sumResult);
      displayRespond.textContent = sumResult;
      for (const num of clickNumber) {
        num.removeEventListener('click', appendNumber2);
      };
    };
  };
};

function clearAll() {
  displayRespond.textContent = 0;;
  testDigit.textContent = '';
  imdDisplay = '';
  console.log('clearall working');
  for (const num of clickNumber) {
    num.removeEventListener('click', appendNumber2);
  };
  for (const num of clickNumber) {
    num.removeEventListener('click', appendImdNumber);
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', appendImdOperator)
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceOperator)
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceImdOperator)
  };
  for (const num of clickNumber) {
    num.addEventListener('click', appendNumber)
  };
  for (const opt of clickOperator) {
    opt.addEventListener('click', appendOperator)
  };
  zeroReset.removeEventListener('click', clearAll);
  clickDecimal.addEventListener('click', appendDecimal);
};

function appendDecimal() {
  imdDisplay += this.textContent;
  displayRespond.textContent += this.textContent;
  testDigit.textContent += this.textContent;
  this.removeEventListener('click', appendDecimal);
  }; 

for (const num of clickNumber) {
  num.addEventListener('click', appendNumber);
};

for (const opt of clickOperator) {
  opt.addEventListener('click', appendOperator)
};

clickOperateNow.addEventListener('click', finalNumber);

clickClearAll.addEventListener('click', clearAll);

clickDecimal.addEventListener('click', appendDecimal);

// Fix prevent no number after decimal to enter operator or calculate





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

// After two numbers and an operator,
// if an operator being pressed again,
// calculate and display the result,
// but not showing the operator.
// As a number enter after the second operator,
// calculate and display the result.
// Repeat the process until = is entered,
// calculate display the final result.

// <Problems now facing with simple calculator>
  // Should prevent chaining operators,
  // but allow proceeding operator to be entered for immediate result,
  // also replace each repeated operator to lastest one
  // <Solution>
    // Add event listener back after each proceeding operator;
    // Wipe out previous operator, use latter one;

  // Should implement calculating function for each proceeding operator.
  // <Solution>
    // Invoke calculator function for each proceeding operator;
    // Text content immediate result;

                          // Next     Next
// (Display,,,,Storage,,,,Operator,,,,Number)
// [2222+2222], 2222+2222,  +,        No,
// [4444],      Empty,      No,       1111,
// [1111],      4444+1111,  +,        No,
// [5555],      Empty,      No,       1111,
// [1111],      5555+1111,  +,        No,
// [6666],      Empty       No,       1111,
// [1111],      6666+1111   =,        No,
// [7777],

