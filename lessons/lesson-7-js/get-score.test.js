import {describe, expect, it} from '@jest/globals'
import getScore from './get-score';

describe('tests for getScore function', () => {

    it('Imports without error', () => {
        expect(typeof getScore).toBe('function');
    })

    it('Returns sum of property values', () => {
        const scores = {
            Anna: 10,
            Olga: 1,
            Ivan: 5,
        }
        expect(getScore(scores)).toBe(16);
    });

    it('Fails because of "Value of property must be number"', () => {
        const errorScores = {
            Anna: 10,
            Olga: 1,
            Ivan: 5,
            Oleg: 'dva'
        }
        expect(() => getScore(errorScores)).toThrow();
    })
})
