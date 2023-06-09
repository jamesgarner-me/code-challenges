const isWinner = require('./isWinner');

describe('Tests', () => {
    test('Example 1', () => {
        let player1 = [4, 10, 7, 9],
            player2 = [6, 5, 2, 3];
        let expected = 1;
        let result = isWinner(player1, player2);
        expect(result).toBe(expected);
    });
    test('Example 2', () => {
        let player1 = [3, 5, 7, 6],
            player2 = [8, 10, 10, 2];
        let expected = 2;
        let result = isWinner(player1, player2);
        expect(result).toBe(expected);
    });
    test('Example 3', () => {
        let player1 = [2, 3],
            player2 = [4, 1];
        let expected = 0;
        let result = isWinner(player1, player2);
        expect(result).toBe(expected);
    });
});
