/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let lower = 0,
        upper = nums.length - 1;

    while (lower < upper) {
        let i = lower + Math.floor((upper - lower + 1) / 2);
        if (nums[i] > target) {
            upper = i - 1;
        } else {
            lower = i;
        }
    }
    return nums[lower] === target ? lower : -1;
};

module.exports = search;
