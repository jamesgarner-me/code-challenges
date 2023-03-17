const maxScore = require('./maxScore');

describe('Some tests', () => {
    test('Maximise prefix test - example 1', () => {
        let nums = [2, -1, 0, 1, -3, 3, -3];

        expect(maxScore(nums)).toBe(6);
    });
    test('Maximise prefix test - example 2', () => {
        let nums = [-2, -3, 0];

        expect(maxScore(nums)).toBe(0);
    });
});
