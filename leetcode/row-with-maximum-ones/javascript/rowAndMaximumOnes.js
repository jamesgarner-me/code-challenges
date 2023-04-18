/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let mostOnes = mat.reduce(
        (mostOnes, current, i) => {
            let countCurrent = count(current, 1);
            return countCurrent > mostOnes.count
                ? { count: countCurrent, i }
                : mostOnes;
        },
        { count: 0, i: 0 }
    );
    return [mostOnes.i, mostOnes.count];
};

var count = (array, n) => {
    console.log(`Array: ${JSON.stringify(array)}`);
    return array.filter((x) => x === n).length;
};

var main = () => {
    let mat = [
        [0, 1],
        [1, 0],
    ];
    // /\let mat = [[0], [0]];
    console.log(rowAndMaximumOnes(mat));
};

main();

module.exports = rowAndMaximumOnes;
