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
let regexCK = /CK/;
let regexCA = /CA/;
let regexDecimal = /./;
let regexOperate = /=/;
let buttonRowList = [];

let i = 0;
for (i = 0; i < 4; i++) {
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('id', `buttonRow${i}`);
  buttonArea.appendChild(buttonRow);
  buttonRowList.push(buttonRow);
}

let buttonList = ['a', 7, 8, 9, '×', 'a', 4, 5, 6, '÷', 
   'CK', 1, 2, 3, '+', 'CA', 0, '.', '−', '=',];
  
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
  } else if (regexCK.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('clearKey');
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
  } else if (regexOperate.test(buttonList[i])) {
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
const clickClearKey = document.querySelector('.clearKey');
const clickClearAll = document.querySelector('.clearAll');
const clickDecimal = document.querySelector('.decimalButton');
const zeroReset = document.querySelector('#buttonArea');

let testDigit = document.createElement('div');
let imdDisplay = '';

let leftOfOperator 
let rightOfOperator;
let foundOperator;
let regexLeft = /\d*\.?\d+/;
let regexRight = /\d*\.*\d+$/;
let regexPattern = /\d+[×÷+−]\d/;
let regexDecLeftHang = /\d+\.$/;
let regexDecRightHang = /[×÷+−<=?]\d+\.$/;

let regexDecimalLeft = /\d+\./;
let regexDecimalRight = /[×÷+−<=?]\d+\./;

let regexDecAfterOpt = /\d+[×÷+−]$/
let zeroDecimal = /0\./;
let chainingZero = /^0$/;

let testFor = '5.5+5'
let testDone = regexDecAfterOpt.test(testFor);
// let testDone2 = regexDecRightHang.test(testFor);
console.log(testDone);
// console.log(testDone2);

function appendNumber() {
  if (chainingZero.test(displayRespond.textContent) &&
    chainingZero.test(this.textContent)) {
    // console.log('no more zero');
    return;
    };
  if (zeroDecimal.test(displayRespond.textContent)) {
    imdDisplay = displayRespond.textContent + this.textContent;
    displayRespond.textContent = imdDisplay;
    // console.log('upper working');
  } else {
    imdDisplay += this.textContent;
    displayRespond.textContent = imdDisplay;
    // console.log('lower working');
  };
  testDigit.textContent += this.textContent;
  for (const opt of clickOperator) {
    opt.addEventListener('click', appendImdOperator);
  };
  // clickDecimal.addEventListener('click', appendDecimal);
  console.log('appnum working');
  console.log(testDigit.textContent);
};

function replaceOperator() {
  if (!regexDecLeftHang.test(testDigit.textContent) ||
    !regexDecRightHang.test(testDigit.textContent)) {
    testDigit.textContent = testDigit.textContent.replace(regexOperator, this.textContent);
    console.log('reopt working');
    console.log(testDigit.textContent);
  };
}; 

function appendImdOperator() {
  if (!regexDecLeftHang.test(testDigit.textContent)) {
    finalNumber();
    imdDisplay = '';
    testDigit.textContent = displayRespond.textContent + this.textContent;
    for (const opt of clickOperator) {
      opt.removeEventListener('click', appendImdOperator);
    };
    for (const opt of clickOperator) {
      opt.addEventListener('click', replaceOperator);
    };
    clickDecimal.addEventListener('click', appendDecimal)
    console.log('imopt working');
    console.log(testDigit.textContent);
  };
};

function roundToTwo(num) {
  return +(Math.round(num + "e+6")  + "e-6");
}
function finalNumber() {
  if (!regexDecLeftHang.test(testDigit.textContent) ||
    !regexDecRightHang.test(testDigit.textContent)) {
    if (regexPattern.test(testDigit.textContent)) {
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
      } else {
        sumResult = roundToTwo(sumResult);
        displayRespond.textContent = sumResult;
        };
        console.log('finalNumber working');
        for (const num of clickNumber) {
          num.removeEventListener('click', appendNumber);
        };
      };
    };
  };

function clearAll() {
  displayRespond.textContent = 0;
  testDigit.textContent = '';
  imdDisplay = '';
  for (const opt of clickOperator) {
    opt.removeEventListener('click', appendImdOperator)
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceOperator)
  };
  for (const num of clickNumber) {
    num.addEventListener('click', appendNumber)
  };
  zeroReset.removeEventListener('click', clearAll);
  clickDecimal.addEventListener('click', appendDecimal);
  console.log('clearall working');
};

function appendDecimal() {
  if (regexDecAfterOpt.test(testDigit.textContent)) {
    return;
  };
  imdDisplay += this.textContent;
  displayRespond.textContent += this.textContent;
  testDigit.textContent += this.textContent;
  clickDecimal.removeEventListener('click', appendDecimal);
  console.log(displayRespond.textContent);
  }; 

// Decimals not coming back after removed
function clearLastKey() {
  imdDisplay = imdDisplay.slice(0, -1);
  displayRespond.textContent = displayRespond.textContent.slice(0, -1);
  testDigit.textContent = testDigit.textContent.slice(0, -1);
  if (!regexDecLeftHang.test(imdDisplay) || 
    !regexDecLeftHang.test(displayRespond.textContent) ||
    !regexDecLeftHang.test(testDigit.textContent)) {
    clickDecimal.addEventListener('click', appendDecimal);
    };
};

for (const num of clickNumber) {
  num.addEventListener('click', appendNumber);
};

clickOperateNow.addEventListener('click', finalNumber);

clickClearAll.addEventListener('click', clearAll);

clickDecimal.addEventListener('click', appendDecimal);

// clickClearKey.addEventListener('click', clearLastKey);

// let teststring = '1234567'
// let stringdone = teststring.slice(0, -1);
// console.log(stringdone);
