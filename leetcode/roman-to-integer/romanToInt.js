/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const integers = [];
    const numeralMap = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    numeralMap.forEach((value, key) => {
        let index = s.indexOf(key);
        while (index !== -1) {
            integers.push(value);
            s = replaceAtIndex(s, index, key.length, '.');
            index = s.indexOf(key, index + 1);
        }
    });

    return integers.reduce((acc, curr) => acc + curr, 0);
};
function replaceAtIndex(str, index, size, replacement) {
    if (index < 0 || index >= str.length) {
        return str; // Return the original string if the index is out of range
    }
    return str.slice(0, index) + replacement + str.slice(index + size);
}
module.exports = romanToInt;
