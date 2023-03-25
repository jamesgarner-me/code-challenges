/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
    const gridSize = grid[0].length;
    let maxVal = gridSize * gridSize - 1;
    let expectedVal = 0;

    // Top-left should be zero
    if (grid[0][0] != expectedVal) {
        return false;
    }

    // 'Valid move' distances
    const dRow = [-1, -2, -1, -2, 1, 2, 1, 2];
    const dCol = [-2, -1, 2, 1, -2, -1, 2, 1];
    const numDistances = dRow.length; // dRow.size == dCol.size

    // Array bounds helper
    const getValue = (row, col, expectedVal) => {
        if (row < 0 || col < 0) return undefined;
        if (row >= gridSize || col >= gridSize) return undefined;
        return grid[row][col];
    };

    // Don't follow the knight, just loop through rows & cols
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            expectedVal = grid[row][col] + 1;
            let isValid = false;
            // End of path, don't check moves
            if (grid[row][col] === maxVal) {
                isValid = true;
                break;
            }
            // Apply 'valid move' distances
            for (let i = 0; i < numDistances; i++) {
                newRow = row + dRow[i];
                newCol = col + dCol[i];
                if (getValue(newRow, newCol) === expectedVal) {
                    isValid = true;
                    break;
                }
            }
            if (!isValid) return false;
        }
    }
    return true;
};

const main = () => {
    const example1 = [
        [0, 11, 16, 5, 20],
        [17, 4, 19, 10, 15],
        [12, 1, 8, 21, 6],
        [3, 18, 23, 14, 9],
        [24, 13, 2, 7, 22],
    ];
    const example2 = [
        [0, 3, 6],
        [5, 8, 1],
        [2, 7, 4],
    ];
    const example3 = [
        [24, 11, 22, 17, 4],
        [21, 16, 5, 12, 9],
        [6, 23, 10, 3, 18],
        [15, 20, 1, 8, 13],
        [0, 7, 14, 19, 2],
    ];
    console.log(checkValidGrid(example1)); // true
    console.log(checkValidGrid(example2)); // false
    console.log(checkValidGrid(example3)); // false
};

main();

module.exports = checkValidGrid;
