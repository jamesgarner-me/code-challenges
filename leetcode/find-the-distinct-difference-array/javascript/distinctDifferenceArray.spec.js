const distinctDifferenceArray = require('./distinctDifferenceArray');

describe('Tests', () => {
    test('Example 1', () => {
        let nums = [1, 2, 3, 4, 5];
        let expected = [-3, -1, 1, 3, 5];
        let result = distinctDifferenceArray(nums);
        expect(result).toStrictEqual(expected);
    });
    test('Example 2', () => {
        let nums = [3, 2, 3, 4, 2];
        let expected = [-2, -1, 0, 2, 3];
        let result = distinctDifferenceArray(nums);
        expect(result).toStrictEqual(expected);
    });
});
