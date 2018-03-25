const assert = require('assert');
Object.freeze(assert);
const evaluateRPN = require('./src/index.js');

describe('evaluateRPN function', () => {

  it('should return ERROR value if operators or operands are missed', () => {
    assert.deepEqual(evaluateRPN(["2", "3"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["2", "3", "4", "-"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["2", "3", "4", "5", "-", "/"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["-", "/"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["2", "2", "*", "*"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["*", "2"," 2"]), {error: "Wrong expression"});
    assert.deepEqual(evaluateRPN(["*", "/"," 2", "2", "2"]), {error: "Wrong expression"});
  });

  it('hould return ERROR value if used unknown operator', () => {
    assert.deepEqual(evaluateRPN(["2", "3", ":"]), {error: "You used unknown operator"});
    assert.deepEqual(evaluateRPN(["3", "2", "m"]), {error: "You used unknown operator"});
    assert.deepEqual(evaluateRPN(["2", "1", "|"]), {error: "You used unknown operator"});
  });

  it('should return ERROR value if divide by zero', () => {
    assert.deepEqual(evaluateRPN(["2", "0", "/"]), {error: "Division by zero"});
    assert.deepEqual(evaluateRPN(["12", "2", "2", "1","*", "-", "/"]), {error: "Division by zero"});
  });

  it('should return the same value if array contains only one operand', () => {
    assert.equal(evaluateRPN(["0"]), 0);
    assert.equal(evaluateRPN(["2"]), 2);
  });

  it('should return 7 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["3", "4", "+"]), 7);
  });

  it('should return 9 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["2", "1", "+", "3", "*"]), 9);
  });

  it('should return 6 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["4", "13", "5", "/", "+"]), 6);
  });

  it('should return 14 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["2", "3", "4", "*", "+"]), 14);
  });

  it('should return 8 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["12", "2", "2", "*", "-"]), 8);
  });

  it('should return -12 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["12", "3", "2", "2","*", "-", "/"]), -12);
  });

  it('should return 1 after arithmetic operations', () => {
    assert.equal(evaluateRPN(["7", "6", "5", "5","-", "-", "-"]), 1);
  });

});