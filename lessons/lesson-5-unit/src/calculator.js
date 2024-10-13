/**
 * Функция выполняет операцию над двумя операндами
 * https://github.com/georgius1024/calc-test/blob/master/src/calculator.js
 * @param {number} operandA
 * @param {string} operation
 * @param {number} operandB
 */
export default function calculator(operandA, operation, operandB) {
    if (isNaN(operandA)) {
        throw new Error('Operand A is not a number');
    }
    if (isNaN(operandB)) {
        throw new Error('Operand B is not a number');
    }
    switch (operation) {
        case '+':
            return operandA + operandB;
        case '-':
            return operandA - operandB;
        case '*':
            return operandA * operandB;
        case '/':
            return operandA / operandB;
        default:
            throw new Error(`Unknown operation: ${operation}`);
    }
}
