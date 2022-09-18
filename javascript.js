function add(term1, term2) {
 sum = term1 + term2;
 return sum;
}

function subtract(baseTerm, subtractFromBase) {
  difference = baseTerm - subtractFromBase;
  return difference;
 }

function multiply(factor1, factor2) {
product = factor1 * factor2;
return product;
}

function divide(dividend, divisor) {
quotient = dividend / divisor;
return quotient;
}

function operate(inputNum1, inputNum2, mathOperator) {
result = mathOperator(inputNum1, inputNum2);
return result;
}


let numberButtonRowList = [];

for (i = 0; i < 4; i++) {
const numberButtonRow = document.createElement('div');
numberButtonRow.setAttribute('id', `numberButtonRow${i}`);
buttonArea.appendChild(numberButtonRow);
numberButtonRowList.push(numberButtonRow);
}

console.log(numberButtonRowList);

let numberButtonList = ['a', 7, 8, 9, '×', 'a', 4, 5, 6, '÷', 
   'a', 1, 2, 3, '+', 'a', 0, '.', '−', '=',]
  

for (i = 0; i < 5; i++) {
  const numberButton = document.createElement('div');
  numberButton.classList.add('numberButton');
  numberButton.setAttribute('id', numberButtonList[i]);     
  numberButton.textContent = numberButtonList[i];
  numberButtonRowList[0].appendChild(numberButton);
}

for (i = 5; i < 10; i++) {
  const numberButton = document.createElement('div');
  numberButton.classList.add('numberButton');
  numberButton.setAttribute('id', numberButtonList[i]);     
  numberButton.textContent = numberButtonList[i];
  numberButtonRowList[1].appendChild(numberButton);
}

for (i = 10; i < 15; i++) {
  const numberButton = document.createElement('div');
  numberButton.classList.add('numberButton');
  numberButton.setAttribute('id', numberButtonList[i]);     
  numberButton.textContent = numberButtonList[i];
  numberButtonRowList[2].appendChild(numberButton);
}

for (i = 15; i < 20; i++) {
  const numberButton = document.createElement('div');
  numberButton.classList.add('numberButton');
  numberButton.setAttribute('id', numberButtonList[i]);     
  numberButton.textContent = numberButtonList[i];
  numberButtonRowList[3].appendChild(numberButton);
}
