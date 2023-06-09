const matrixSumQueries = require('./matrixSumQueries');

describe('Tests', () => {
    test('Example 1', () => {
        let n = 3,
            queries = [
                [0, 0, 1],
                [1, 2, 2],
                [0, 2, 3],
                [1, 0, 4],
            ];
        let expected = 23;
        expect(matrixSumQueries(n, queries)).toBe(expected);
    });
    test('Example 2', () => {
        (n = 3),
            (queries = [
                [0, 0, 4],
                [0, 1, 2],
                [1, 0, 1],
                [0, 2, 3],
                [1, 2, 1],
            ]);
        let expected = 17;
        expect(matrixSumQueries(n, queries)).toBe(expected);
    });
});
