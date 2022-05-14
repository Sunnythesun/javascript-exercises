const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiplied = 1;
  for (let i = 0; i < array.length; i++) {
    multiplied *= array[i];
  }
  return multiplied;

};

const power = function (a, b) {
  let powered = 1;
  for (let i = 0; i < b; i++) {
    powered *= a;
  }
  return powered;
};

const factorial = function (a) {
  let factorialed = 1;
  for (i = 1; i <= a; i++) {
    factorialed *= i;
  }
  return factorialed;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
