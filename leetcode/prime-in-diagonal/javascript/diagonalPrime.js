/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let diagonalNums = [];
    for (let i = 0; i < nums.length; i++) {
        diagonalNums.push(nums[i][i]);
        diagonalNums.push(nums[i][nums.length - i - 1]);
    }
    let diagonalNumsSorted = [...new Set(diagonalNums.sort((a, b) => b - a))];
    for (let i = 0; i < diagonalNumsSorted.length; i++) {
        if (isPrime(diagonalNumsSorted[i])) return diagonalNumsSorted[i];
    }
    return 0;
};

var isPrime = function (num) {
    for (let i = 2, lim = Math.abs(Math.sqrt(num)); i <= lim; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

module.exports = { diagonalPrime, isPrime };
