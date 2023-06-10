const isPalindrome = require('./isPalindrome');

describe('Tests', () => {
    test('Example 1', () => {
        let x = 121;
        let expected = true;
        expect(isPalindrome(x)).toBe(expected);
    });
    test('Example 2', () => {
        let x = -121;
        let expected = false;
        expect(isPalindrome(x)).toBe(expected);
    });
    test('Example 3', () => {
        let x = 10;
        let expected = false;
        expect(isPalindrome(x)).toBe(expected);
    });
});
