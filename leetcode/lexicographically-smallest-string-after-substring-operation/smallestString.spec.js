const smallestString = require('./smallestString');

describe('Tests', () => {
    test('Example 2', () => {
        s = 'cbabc';
        expected = 'baabc';
        expect(smallestString(s)).toBe(expected);
    });
    test('Example 3', () => {
        s = 'acbbc';
        expected = 'abaab';
        expect(smallestString(s)).toBe(expected);
    });
    test('Example 4', () => {
        s = 'leetcode';
        expected = 'kddsbncd';
        expect(smallestString(s)).toBe(expected);
    });
});
