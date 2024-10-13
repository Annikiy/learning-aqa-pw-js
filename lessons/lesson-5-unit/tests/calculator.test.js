import calculator from '../src/calculator';
import {describe, it, expect} from "@jest/globals";

describe('Base calculator function tests', () => {
    const testCoverage = [
        [1, '+', 99, 100],
        [101, '-', 1, 100],
        [100, '*', 1, 100],
        [100, '/', 1, 100],
        [10, '%', 3, 'Unknown operation: %'],
        ['kek', '+', 3, 'Operand A is not a number'],
        [1, '+', 'kek', 'Operand B is not a number'],
    ];
    it.each(testCoverage)('$s + $s = $s', (
        operandA,
        operation,
        operandB,
        expected
    ) => {
        if (typeof expected === 'string') {
            expect(() => calculator(operandA, operation, operandB)).toThrow();
        } else {
            expect(calculator(operandA, operation, operandB)).toBe(expected);
        }
    });
})
