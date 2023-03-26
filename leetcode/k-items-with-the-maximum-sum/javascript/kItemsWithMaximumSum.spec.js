const kItemsWithMaximumSum = require('./kItemsWithMaximumSum');

describe('Some tests', () => {
    test('K Items With the Maximum Sum - example 1', () => {
        let result = kItemsWithMaximumSum(3, 2, 0, 2);
        expect(result).toBe(2);
    });
    test('K Items With the Maximum Sum - example 2', () => {
        let result = kItemsWithMaximumSum(3, 2, 0, 4);
        expect(result).toBe(3);
    });
    test('K Items With the Maximum Sum - example 3', () => {
        let result = kItemsWithMaximumSum(4, 0, 1, 2);
        expect(result).toBe(2);
    });
    test('K Items With the Maximum Sum - example 4', () => {
        let result = kItemsWithMaximumSum(6, 6, 6, 13);
        expect(result).toBe(5);
    });
});
