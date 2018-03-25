module.exports = function evaluateRPN(arr) {
    const operators = ["+","-","*","/"];
    const stack = [];
    let value = 0;
    let countOperators = 0;
    let countOperands = 0;

    for(let i = 0; i < arr.length; i++) {
        if(operators.indexOf(arr[i]) !== -1){
            countOperators++;
        } else if(isNaN(arr[i])) {
            return {error: "You used unknown operator"};
        }
        else {
            countOperands ++;
        }
    }

    if( operators.indexOf(arr[0]) !== -1 ||
        countOperators == 0 && countOperands == 0 ||
        countOperands == 0 ||
        countOperands - countOperators !== 1
      ) {
        return {error: "Wrong expression"};
      }

    for(let i = 0; i < arr.length; i++) {
        if(operators.indexOf(arr[i]) === -1){
            stack.push(Number(arr[i]));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let index = operators.indexOf(arr[i]);

            switch(index) {
                case 0:
                    stack.push(a + b);
                    break;
                case 1:
                    stack.push(b - a);
                    break;
                case 2:
                    stack.push(a * b);
                    break;
                case 3:
                    if(a == 0) {
                        return {error: "Division by zero"};
                    } else{
                        stack.push(Math.floor(b / a));
                    } 
                    break;
            }
        }
    }

    value = stack.pop();

    return value;
}