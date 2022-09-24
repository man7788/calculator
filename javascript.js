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

// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let regexNum = /[0-9]/;
let regexOperator = /[×÷+−]/;
let regexCK = /CK/;
let regexCA = /CA/;
let regexDecimal = /./;
let regexOperate = /=/;
let regexPosNeg = /\+\−/;
let buttonRowList = [];

let i = 0;
for (i = 0; i < 4; i++) {
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('id', `buttonRow${i}`);
  buttonArea.appendChild(buttonRow);
  buttonRowList.push(buttonRow);
}
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let buttonList = ['+−', 7, 8, 9, '×', '◄ ►', 4, 5, 6, '÷', 
   'CK', 1, 2, 3, '+', 'CA', 0, '.', '−', '=',];

for (i = 0; i < 5; i++) {
  const clickButton = document.createElement('div');
  if (regexNum.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('numberButton');
    clickButton.textContent = buttonList[i];
  } else if (regexPosNeg.test(buttonList[i])) {
    clickButton.setAttribute('id', buttonList[i]);
    clickButton.classList.add('posNeg');
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
const clickPosNeg = document.querySelector('.posNeg');

const zeroReset = document.querySelector('#buttonArea');

let testDigit = document.createElement('div');
let imdDisplay = '';

let leftOfOperator 
let rightOfOperator;
let foundOperator;
let regexLeft = /-*\d*\.?\d+/;
let regexRight = /-*d*\.*\d+$/;
let regexPattern = /\d+[×÷+−]\-*\d/;
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let regexDecLeftHang = /\d+\.$/;
let regexDecRightHang = /[×÷+−<=?]-*\d+\.$/;
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let regexDecimalLeft = /\d+\./;
let regexDecimalRight = /[×÷+−<=?]-*\d+\./;
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let regexDecAfterOpt = /\d+[×÷+−]$/
let zeroDecimal = /0\.$/;
let chainingZero = /^0$/;

let testFor = '-5'
let testDone = regexRight.test(testFor);
// let testDone2 = regexDecRightHang.test(testFor);
console.log(testDone);
// console.log(testDone2);

// Not allow deciaml after 7 digits
// Allow beginning 0 calculation 
// Not allow Chaining zero
// Not allow Chaining 0......
// Not allow leading zero
// Not allow operator function
// Not allow calculate function
// Not allow deciaml after deciaml
function appendNumber() {
  if (chainingZero.test(displayRespond.textContent) &&
    chainingZero.test(this.textContent) &&
    chainingZero.test(testDigit.textContent)) {
    console.log('No chaining zero');
    return;
    };
  if (zeroDecimal.test(displayRespond.textContent)) {
    imdDisplay = displayRespond.textContent + this.textContent;
    displayRespond.textContent = imdDisplay;
    // console.log('No 0......');
  } else {
    imdDisplay += this.textContent;
    displayRespond.textContent = imdDisplay;
    // console.log('Normal number input');
  };
  testDigit.textContent += this.textContent;
  testDigit.textContent = testDigit.textContent.slice(0, 7);
  displayRespond.textContent = displayRespond.textContent.slice(0, 7);
  for (const opt of clickOperator) {
    opt.addEventListener('click', appendOperator);
  };
  console.log('appendNumber working');
  console.log(testDigit.textContent);
};

// Not allow operator hanging decimal
// Not allow chaining operator
function appendOperator() {
  if (!regexDecLeftHang.test(displayRespond.textContent) ||
  chainingZero.test(displayRespond.textContent)) {
    testDigit.textContent = displayRespond.textContent + this.textContent;
    imdDisplay = '';
    for (const opt of clickOperator) {
      opt.removeEventListener('click', appendOperator);
    };
    for (const opt of clickOperator) {
      opt.addEventListener('click', replaceOperator);
    };
    for (const opt of clickNumber) {
      opt.removeEventListener('click', appendNumber);
    };
    for (const opt of clickNumber) {
      opt.addEventListener('click', appendImdNumber);
    };
    clickDecimal.addEventListener('click', appendDecimal)
    clickPosNeg.removeEventListener('click', changeImdPosNeg)
    clickPosNeg.addEventListener('click', changePosNeg)
    console.log(testDigit.textContent);
    console.log('appendOperator working');
  };
};

function replaceOperator() {
  if (!regexDecLeftHang.test(testDigit.textContent) ||
    !regexDecRightHang.test(testDigit.textContent)) {
    testDigit.textContent = testDigit.textContent.replace(regexOperator, this.textContent);
    console.log('replaceOperator working');
    console.log(testDigit.textContent);
  };
}; 

// Not allow Chaining zero
// Not allow Chaining 0......
// Not allow leading zero
// Not allow deciaml after deciaml
function appendImdNumber() {
  if (chainingZero.test(displayRespond.textContent) &&
    chainingZero.test(this.textContent)) {
    return;
    };
  imdDisplay += this.textContent;
  displayRespond.textContent = imdDisplay;
  testDigit.textContent += this.textContent;
  testDigit.textContent = testDigit.textContent.slice(0, 14);
  displayRespond.textContent = displayRespond.textContent.slice(0, 7);
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceOperator);
  };
  for (const opt of clickOperator) {
    opt.addEventListener('click', appendImdOperator);
  };
  console.log(testDigit.textContent);
  console.log('appendImdNumber working');
};

function appendImdOperator() {
  if (!regexDecLeftHang.test(displayRespond.textContent) &&
    regexPattern.test(testDigit.textContent)) {
    finalNumber();
    imdDisplay = '';
    testDigit.textContent = displayRespond.textContent + this.textContent;
    for (const opt of clickOperator) {
      opt.removeEventListener('click', appendImdOperator);
    };
    for (const opt of clickOperator) {
      opt.addEventListener('click', replaceOperator);
    };
    for (const num of clickNumber) {
      num.addEventListener('click', appendImdNumber);
    };  
    clickDecimal.addEventListener('click', appendDecimal);
    clickClearKey.addEventListener('click', clearLastKey);
    clickPosNeg.removeEventListener('click', changeImdPosNeg);
    clickPosNeg.addEventListener('click', changePosNeg);
    console.log('appendImdOperator working');
    console.log(testDigit.textContent);

  };
};

function roundToN(num) {
  return +(Math.round(num + "e+5")  + "e-5");
}

// If number longer than 7 digit, flex-start
// Allow Final result only 6 digits
// Not Allow Negative result overflowing, flex-start
function finalNumber() {
  if (!regexDecLeftHang.test(testDigit.textContent) ||
    !regexDecRightHang.test(testDigit.textContent)) {
    if (regexPattern.test(testDigit.textContent)) {
      leftOfOperator = regexLeft.exec(testDigit.textContent);
      rightOfOperator = regexRight.exec(testDigit.textContent);
      foundOperator = regexOperator.exec(testDigit.textContent);
      leftOfOperator = Number(leftOfOperator[0]);
      rightOfOperator = Number(rightOfOperator[0]);
      console.log(leftOfOperator);
      console.log(rightOfOperator);
      let sumResult = operate(leftOfOperator, rightOfOperator, foundOperator);
      // console.log(isNaN(sumResult));
      if (isNaN(sumResult)) {
        displayRespond.textContent = sumResult;
        zeroReset.addEventListener('click', () => {
          zeroReset.addEventListener('click', clearAll)
        });
      } else {
        sumResult = roundToN(sumResult);
        displayRespond.textContent = sumResult;
        console.log(sumResult);
        // if (displayRespond.textContent > 0 &&
        //   displayRespond.textContent.length > 7) {
        //     displayRespond.textContent = 
        //     displayRespond.textContent.slice(0, 7)
        //   } else if (displayRespond.textContent < 0 &&
        //     displayRespond.textContent.length > 7) {
        //       displayRespond.textContent = 
        //       displayRespond.textContent.slice(0, 7)
        //     };
        };
        for (const num of clickNumber) {
          num.removeEventListener('click', appendNumber);
        for (const num of clickNumber) {
          num.removeEventListener('click', appendImdNumber);
        };
        clickDecimal.removeEventListener('click', appendDecimal);
        clickClearKey.removeEventListener('click', clearLastKey);
        clickPosNeg.removeEventListener('click', changePosNeg)
        clickPosNeg.addEventListener('click', changeImdPosNeg)
        };
      };
    };
    console.log('finalNumber working');
    console.log(displayRespond.textContent);
    console.log(testDigit.textContent);
  };

function clearAll() {
  displayRespond.textContent = 0;
  testDigit.textContent = '';
  imdDisplay = '';
  for (const num of clickNumber) {
    num.addEventListener('click', appendNumber)
  };
  for (const num of clickOperator) {
    num.addEventListener('click', appendOperator);
  };
  for (const num of clickNumber) {
    num.removeEventListener('click', appendImdNumber)
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', appendImdOperator)
  };
  for (const opt of clickOperator) {
    opt.removeEventListener('click', replaceOperator)
  };
  zeroReset.removeEventListener('click', clearAll);
  clickDecimal.addEventListener('click', appendDecimal);
  console.log('clearall working');
};

function appendDecimal() {
  if (regexDecAfterOpt.test(testDigit.textContent) ||
  displayRespond.textContent.length === 7) {
    return;
  };
  imdDisplay += this.textContent;
  displayRespond.textContent += this.textContent;
  testDigit.textContent += this.textContent;
  clickDecimal.removeEventListener('click', appendDecimal);
  console.log(displayRespond.textContent);
  console.log('appendDecimal working');
  }; 

function clearLastKey() {
  if (!regexDecAfterOpt.test(testDigit.textContent)) {
  imdDisplay = imdDisplay.slice(0, -1);
  displayRespond.textContent = displayRespond.textContent.slice(0, -1);
  testDigit.textContent = testDigit.textContent.slice(0, -1);
  };
  if (!regexDecLeftHang.test(imdDisplay) || 
    !regexDecLeftHang.test(displayRespond.textContent) ||
    !regexDecLeftHang.test(testDigit.textContent)) {
    clickDecimal.addEventListener('click', appendDecimal);
    };
  if (displayRespond.textContent.length === 0) {
    displayRespond.textContent = 0;
  };
  console.log('clearLastKey working');
};

function changePosNeg() {
  if (testDigit.textContent > 0 && 
    !regexDecLeftHang.test(testDigit.textContent)) {
      let negNumber = -Math.abs(displayRespond.textContent);
      displayRespond.textContent = negNumber;
      testDigit.textContent = negNumber;
      console.log('Left negNum working');
  } else if (testDigit.textContent < 0 && 
    regexLeft.test(testDigit.textContent) &&
    !regexDecLeftHang.test(testDigit.textContent)) {
      let posNumber = Math.abs(displayRespond.textContent)
      displayRespond.textContent = posNumber;
      testDigit.textContent = posNumber;
      console.log('Left posNum working');
    } else if (displayRespond.textContent > 0 &&
    regexRight.test(testDigit.textContent) &&
    !regexDecRightHang.test(testDigit.textContent)) {
      let negNumber = -Math.abs(displayRespond.textContent);
      displayRespond.textContent = negNumber;
      testDigit.textContent = testDigit.textContent.replace(regexRight, negNumber);
      console.log('Right negNum working');  
  } else if (displayRespond.textContent < 0 &&
    regexRight.test(testDigit.textContent) &&
    !regexDecRightHang.test(testDigit.textContent)) {
      let posNumber = Math.abs(displayRespond.textContent);
      displayRespond.textContent = posNumber;
      testDigit.textContent = testDigit.textContent.replace(regexRight, posNumber);
      console.log('Right posNum working');
    };
  // console.log('changePosNeg working');
  console.log(testDigit.textContent);
};

function changeImdPosNeg() {
  if (displayRespond.textContent > 0) {
      let negNumber = -Math.abs(displayRespond.textContent);
      displayRespond.textContent = negNumber;
      testDigit.textContent = negNumber;
      console.log('Left ImdnegNum working');
  } else if (displayRespond.textContent < 0) {
      let posNumber = Math.abs(displayRespond.textContent)
      displayRespond.textContent = posNumber;
      testDigit.textContent = posNumber;
      console.log('Left ImdposNum working');
    };
    for (const num of clickOperator) {
      num.addEventListener('click', appendOperator);
  };
  // console.log('changeImdPosNeg working');
};

for (const num of clickNumber) {
  num.addEventListener('click', appendNumber);
};

for (const num of clickOperator) {
  num.addEventListener('click', appendOperator);
};

clickOperateNow.addEventListener('click', finalNumber);

clickClearAll.addEventListener('click', clearAll);

clickDecimal.addEventListener('click', appendDecimal);

clickClearKey.addEventListener('click', clearLastKey);

clickPosNeg.addEventListener('click', changePosNeg)

// // --------------------Keyboard Support--------------------
// Replace operater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let keyboardList = {
  Enter: '=',
  Backspace: 'CK',
  Escape: 'CA',
  '-':'−', 
  '*':'×', 
  '/':'÷',
};

window.addEventListener('keydown', (e) => {
  for (let key in keyboardList) {
    if (key === e.key) {
      document.getElementById(keyboardList[key]).click();
    };
  };
  document.getElementById(e.key).click();
});
