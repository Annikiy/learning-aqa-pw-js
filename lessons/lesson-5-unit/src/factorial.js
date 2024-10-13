/**
 * Функция вычисляет факториал целого числа от 0 до 100.
 * Факториал натурального числа n определяется как
 * произведение всех натуральных чисел от 1 до n включительно.
 * https://ru.wikipedia.org/wiki/Факториал
 * @example
 * ```js
 * factorial(5); // 1 * 2 * 3 * 4 * 5 = 120
 * ```
 * @param x number
 */
export default function factorial(x) {
    switch (true) {
        case (typeof x !== 'number'):
            throw new Error('X must be number');

        case (x < 0 || x > 100):
            throw new Error('X must be in range of 0..100');

        case (Math.ceil(x) !== x):
            throw new Error('X must be integer');

        case (x === 0):
            return 1;

        default:
            return x * factorial(x - 1);
    }
}
