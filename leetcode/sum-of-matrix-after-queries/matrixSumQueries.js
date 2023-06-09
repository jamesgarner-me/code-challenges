/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
    let colSet = new Set();
    let rowSet = new Set();
    let sum = 0;
    for (let i = queries.length - 1; i >= 0; i--) {
        let [type, index, val] = queries[i];
        if ((type && rowSet.has(index)) || (!type && colSet.has(index)))
            continue;
        if (type) {
            rowSet.add(index);
            sum += val * (n - colSet.size);
        } else if (!type) {
            colSet.add(index);
            sum += val * (n - rowSet.size);
        }
    }
    return sum;
};
var main = function () {
    (n = 3),
        (queries = [
            [0, 0, 4],
            [0, 1, 2],
            [1, 0, 1],
            [0, 2, 3],
            [1, 2, 1],
        ]);
    console.log(matrixSumQueries(n, queries));
};
main();
module.exports = matrixSumQueries;
