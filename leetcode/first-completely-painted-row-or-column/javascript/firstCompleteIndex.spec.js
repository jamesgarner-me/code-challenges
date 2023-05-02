const firstCompleteIndex = require('./firstCompleteIndex');

describe('Tests', () => {
    test('Example 1', () => {
        let arr = [1, 3, 4, 2],
            mat = [
                [1, 4],
                [2, 3],
            ];
        let expected = 2;
        let result = firstCompleteIndex(arr, mat);
        expect(result).toBe(expected);
    });
    test('Example 2', () => {
        let arr = [2, 8, 7, 4, 1, 3, 5, 6, 9],
            mat = [
                [3, 2, 5],
                [1, 4, 6],
                [8, 7, 9],
            ];
        let expected = 3;
        let result = firstCompleteIndex(arr, mat);
        expect(result).toBe(expected);
    });
    test('Example 3', () => {
        let arr = [1, 4, 5, 2, 6, 3];
        mat = [
            [4, 3, 5],
            [1, 2, 6],
        ];
        let expected = 1;
        let result = firstCompleteIndex(arr, mat);
        expect(result).toBe(expected);
    });
    test('Example 4', () => {
        let arr = [6, 2, 3, 1, 4, 5],
            mat = [
                [5, 1],
                [2, 4],
                [6, 3],
            ];
        let expected = 2;
        let result = firstCompleteIndex(arr, mat);
        expect(result).toBe(expected);
    });
});
