/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
    let prev = 0;
    let count = 0;
    nums.sort((a, b) => b - a).forEach((num) => {
        num += prev;
        prev = num;
        if (num > 0) {
            count++;
        }
    });
    return count;
};

const main = () => {
    let nums = [2, -1, 0, 1, -3, 3, -3];
    console.log(maxScore(nums));

    nums = [-2, -3, 0];
    console.log(maxScore(nums));
};

main();

module.exports = maxScore;
