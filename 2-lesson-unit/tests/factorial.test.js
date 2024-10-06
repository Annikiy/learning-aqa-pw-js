import {describe, it, test, expect, beforeAll, afterAll} from "@jest/globals";
import factorial from "../src/factorial";

describe('Base factorial function tests', () => {
    beforeAll(() => {
        console.log('Tests start')
    });

    it('imports without errors', () => {
        expect(factorial).toBeDefined();
        expect(typeof factorial).toBe('function');
    });

    it('factorial(0) is 1', () => {
        expect(factorial(0)).toBe(1);
    });

    it('factorial(1) is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('factorial(3) is 6', () => {
        expect(factorial(3)).toBe(6);
    });

    it('factorial(100) is 9.33262154439441e+157', () => {
        expect(factorial(100)).toBe(9.33262154439441e+157);
    });

    it('factorial(-1) fails', () => {
        expect(() => factorial(-1)).toThrow('X must be in range of 0..100');
    });

    it('factorial(101) fails', () => {
        expect(() => factorial(101)).toThrow('X must be in range of 0..100');
    });

    it('factorial("string") fails', () => {
        expect(() => factorial('string')).toThrow('X must be number');
    });

    it('factorial(1.5) fails', () => {
        expect(() => factorial(1.5)).toThrow('X must be integer');
    });


    afterAll(() => {
        console.log('Tests has finished')
    })
});

const testCoverage = [
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [100, 9.33262154439441e+157],
    [-1, 'error'],
    [101, 'error'],
    ["string", 'error'],
    [1.5, 'error'],
]

describe('Parametric factorial function tests', () => {
    test.each(testCoverage)('%s! = %s', (n, expected) => {
        if(expected === 'error') {
            expect(() => factorial(n)).toThrow();
        } else {
            expect(factorial(n)).toBe(expected);
        }
    })
})
