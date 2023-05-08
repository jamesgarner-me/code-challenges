/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    let diff = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let pre = new Set(nums.slice(0, i + 1)).size;
        let suf = new Set(nums.slice(i + 1, n)).size;
        diff.push(pre - suf);
    }
    return diff;
};

var main = function () {
    let nums = [1, 2, 3, 4, 5];
    console.log(distinctDifferenceArray(nums));
};
main();

module.exports = distinctDifferenceArray;
