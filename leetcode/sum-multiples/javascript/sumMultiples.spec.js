const sumOfMultiples = require('./sumMultiples');

describe('Tests', () => {
    test('Example 1', () => {
        var result = sumOfMultiples(7);
        expect(result).toEqual(21);
    });
    test('Example 2', () => {
        var result = sumOfMultiples(10);
        expect(result).toEqual(40);
    });
    test('Example 3', () => {
        var result = sumOfMultiples(9);
        expect(result).toEqual(30);
    });
});
