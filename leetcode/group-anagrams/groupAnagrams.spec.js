const groupAnagrams = require('./groupAnagrams');

describe('Tests', () => {
    // test('Example 1', () => {
    //     let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    //     let expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    //     let result = groupAnagrams(strs);
    //     expect(result).toStrictEqual(expected);
    // });
    test('Example 2', () => {
        let strs = [''];
        let expected = [['']];
        let result = groupAnagrams(strs);
        expect(result).toStrictEqual(expected);
    });
    test('Example 3', () => {
        let strs = ['a'];
        let expected = [['a']];
        let result = groupAnagrams(strs);
        expect(result).toStrictEqual(expected);
    });
});
