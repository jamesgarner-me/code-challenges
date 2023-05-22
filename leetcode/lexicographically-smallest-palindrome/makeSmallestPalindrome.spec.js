const makeSmallestPalindrome = require('./makeSmallestPalindrome');

describe('Tests', () => {
    test('Example 1', () => {
        let s = 'egcfe';
        let expected = 'efcfe';
        let actual = makeSmallestPalindrome(s);
        expect(actual).toBe(expected);
    });
    test('Example 2', () => {
        let s = 'abcd';
        let expected = 'abba';
        let actual = makeSmallestPalindrome(s);
        expect(actual).toBe(expected);
    });
    test('Example 3', () => {
        let s = 'seven';
        let expected = 'neven';
        let actual = makeSmallestPalindrome(s);
        expect(actual).toBe(expected);
    });
    test('Example 4', () => {
        let s = 'atie';
        let expected = 'aiia';
        let actual = makeSmallestPalindrome(s);
        expect(actual).toBe(expected);
    });
});
