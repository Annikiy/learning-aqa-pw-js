import {test, it, expect} from "@jest/globals";
import factorial from "../scr/factorial";

test('base tests factorial function', () => {
    it('function', () => {
        expect(typeof factorial).toBe('function');
    });
});
// Ошибка возникает из-за того, что в Jest нельзя вкладывать один тест в другой. Вместо этого, используйте describe для группировки тестов, а it или test для самих тестов. Вот как можно исправить ваш код:
//
// JavaScript
//
// import { test, expect } from "@jest/globals";
// import factorial from "../src/factorial";
//
// describe('base tests for factorial function', () => {
//     it('should be a function', () => {
//         expect(typeof factorial).toBe('function');
//     });
//
//     // Добавьте другие тесты здесь
// });
