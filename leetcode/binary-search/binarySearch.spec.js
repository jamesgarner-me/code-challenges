const search = require('./binarySearch');

describe('Tests', () => {
    test('Example 1', () => {
        let nums = [-1, 0, 3, 5, 9, 12],
            target = 9;
        let expected = 4;
        let result = search(nums, target);
        expect(result).toBe(expected);
    });
    test('Example 2', () => {
        let nums = [-1, 0, 3, 5, 9, 12],
            target = 2;
        let expected = -1;
        let result = search(nums, target);
        expect(result).toBe(expected);
    });
});
