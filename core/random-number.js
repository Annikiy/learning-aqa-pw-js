
export default class RandomNumber {
    static get() {
        return Math.round(Math.random() * 1_000_000);
    }
}
