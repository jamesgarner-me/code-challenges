const romanToInt = require('./romanToInt');

describe('Tests', () => {
    test('Example 1', () => {
        let s = 'III';
        let expected = 3;
        expect(romanToInt(s)).toBe(expected);
    });
    test('Example 2', () => {
        let s = 'LVIII';
        let expected = 58;
        expect(romanToInt(s)).toBe(expected);
    });
    test('Example 3', () => {
        let s = 'MCMXCIV';
        let expected = 1994;
        expect(romanToInt(s)).toBe(expected);
    });
});
