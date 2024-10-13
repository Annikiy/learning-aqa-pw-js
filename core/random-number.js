
export default class RandomNumber {

    /**
     * Возвращает случайное число
     *
     * @static
     * @returns {number}
     */
    static get() {
        return Math.round(Math.random() * 1_000_000);
    }
}
