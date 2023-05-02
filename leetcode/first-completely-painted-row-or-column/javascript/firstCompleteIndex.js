/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    let totalRows = mat.length;
    let totalCols = mat[0].length;
    let paintedRowCount = Array(totalRows).fill(0);
    let paintedColCount = Array(totalCols).fill(0);

    // Store mat in Map to reduce time complexity
    let matrixMap = new Map();
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            matrixMap.set(mat[row][col], { row: row, col: col });
        }
    }

    // Paint some tiles
    for (let i = 0; i < arr.length; i++) {
        let paintedTile = matrixMap.get(arr[i]);

        paintedRowCount[paintedTile.row]++;

        // Check if all column elements which make up this row are painted
        if (paintedRowCount[paintedTile.row] === totalCols) {
            return i;
        }

        paintedColCount[paintedTile.col]++;
        // Check if all row elements which make up this column are painted
        if (paintedColCount[paintedTile.col] === totalRows) {
            return i;
        }
    }
};

var main = function () {
    let arr = [1, 4, 5, 2, 6, 3];
    mat = [
        [4, 3, 5],
        [1, 2, 6],
    ]; // Expected: 1
    console.log(firstCompleteIndex(arr, mat));
};

main();

module.exports = firstCompleteIndex;
