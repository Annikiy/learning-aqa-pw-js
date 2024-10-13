
/**
 * Function for homework,
 * returns sum of property values
 *
 * @param object {Object.<string, number>}
 * @return {number}
 */
export default function getScore(object) {
    return Object.entries(object).reduce((acc, [_, value]) => {
        if(typeof(value) !== 'number') {
            throw new Error('Value of property must be number');
        }
        return acc + value;
    }, 0);
}
