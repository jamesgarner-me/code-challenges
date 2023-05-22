/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    let len = s.length - 1;
    let result = s.split('');
    for (let i = 0; i <= len; i++) {
        if (result[i] != result[len - i]) {
            result[i] < result[len - i]
                ? (result[len - i] = result[i])
                : (result[i] = result[len - i]);
        }
    }
    return result.join('');
};
// var main = function () {
//     console.log(`result: ${makeSmallestPalindrome('egcfe')}`);
//     console.log(`result: ${makeSmallestPalindrome('abcd')}`);
//     console.log(`result: ${makeSmallestPalindrome('seven')}`);
//     console.log(`result: ${makeSmallestPalindrome('atie')}`);
// };
// main();
module.exports = makeSmallestPalindrome;
