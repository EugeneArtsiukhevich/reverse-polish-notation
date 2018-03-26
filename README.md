## Reverse Polish Notation

### Description

Write a method evaluateRPN that evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Each operand may be an integer or another expression.


The argument passed in will be an array of operands and operators.
The return value should be value after arithmetic operations.

### IMPORTANT NOTES

If the argument passed in is array without operands or operators, then method should return:
```javascript
   {error: "Wrong expression"}
```
If the argument passed in is array with uknown operator, then method should return:
```javascript
   {error: "You used unknown operator"}
```
If we have division by zero, then method should return:
```javascript
   {error: "Division by zero"}
```


### For example:
```javascript
  evaluateRPN(["4"])  --> 4
  evaluateRPN(["3", "4", "+"])  --> 7
  evaluateRPN(["2", "1", "+", "3", "*"])  --> 9
  evaluateRPN(["4", "13", "5", "/", "+"])  --> 6
  evaluateRPN(["2", "3", "4", "*", "+"])  --> 14
  evaluateRPN(["3", "2"])  --> {error: "Wrong expression"}
  evaluateRPN(["-", "/"])  --> {error: "Wrong expression"}
  evaluateRPN(["*", "2"," 2"])  --> {error: "Wrong expression"}
  evaluateRPN([["2", "1", "|"])  --> {error: "You used unknown operator"}
  evaluateRPN(["2", "0", "/"])  --> {error: "Division by zero"}
```
![Reverse Polish Sausage](./images/rps.png)

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `git clone https://github.com/EugeneArtsiukhevich/reverse-polish-notation.git`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passing and failing tests

#### Write your code in `src/index.js`
#### Run test locally `npm test`