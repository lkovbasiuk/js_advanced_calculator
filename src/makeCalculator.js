'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const resultObject = {
    result: 0,
  };

  resultObject.operate = function operate(action, number) {
    this.result = action(this.result, number);

    return this;
  };

  resultObject.add = function add(operand1, operand2) {
    return operand1 + operand2;
  };

  resultObject.subtract = function subtract(operand1, operand2) {
    return operand1 - operand2;
  };

  resultObject.multiply = function multiply(operand1, operand2) {
    return operand1 * operand2;
  };

  resultObject.divide = function divide(operand1, operand2) {
    return operand1 / operand2;
  };

  resultObject.reset = function reset() {
    this.result = 0;

    return this;
  };

  return resultObject;
}

module.exports = makeCalculator;
