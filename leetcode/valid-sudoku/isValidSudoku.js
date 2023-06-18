/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let len = board.length;
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (board[row][col] != '.') {
                if (!possible(board, row, col, parseInt(board[row][col]))) {
                    return false;
                }
            }
        }
    }
    return true;
};
const possible = (board, row, col, n) => {
    // set current square to zero to avoid false negative
    board[row][col] = 0;
    for (let i = 0; i < 9; i++) {
        if (parseInt(board[row][i]) === n) {
            return false;
        }
    }
    for (let j = 0; j < 9; j++) {
        if (parseInt(board[j][col]) === n) {
            return false;
        }
    }
    let row0 = Math.floor(row / 3) * 3;
    let col0 = Math.floor(col / 3) * 3;
    for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
            let val = parseInt(board[row0 + k][col0 + l]);
            if (val != NaN && val === n) {
                return false;
            }
        }
    }
    return true;
};

module.exports = isValidSudoku;
