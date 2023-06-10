/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString();
    let len = x.length;
    for (let i = 0, j = len - 1; i < len, j >= 0; i++, j--) {
        if (x[i] != x[j]) {
            return false;
        }
    }
    return true;
};
module.exports = isPalindrome;
