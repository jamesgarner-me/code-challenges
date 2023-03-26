/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let firstBagItemsUsed = numOnes - k;

    // scenario 1: take all from first bag
    if (firstBagItemsUsed >= 0) return k;

    let k_remaining = Math.abs(firstBagItemsUsed);

    // scenario 2: take all from first and second bag
    let secondBagItemsUsed = numZeros - k_remaining;
    if (secondBagItemsUsed >= 0) return numOnes;

    // scenario 3: take from all bags
    k_remaining = Math.abs(secondBagItemsUsed);

    return numOnes + k_remaining * -1;
};

/** Single statement alternative */
// var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
//     // Good luck reading that (:
//     return numOnes + numZeros - k >= 0
//         ? k > numOnes
//             ? numOnes
//             : k
//         : numOnes + Math.abs(numOnes + numZeros - k) * -1;
// };

const main = () => {
    // example1:
    let numOnes = 3;
    let numZeros = 2;
    let numNegOnes = 0;
    let k = 2;

    console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));

    // example2:
    numOnes = 3;
    numZeros = 2;
    numNegOnes = 0;
    k = 4;
    console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));

    // example3:
    numOnes = 4;
    numZeros = 0;
    numNegOnes = 1;
    k = 2;
    console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));

    // example4:
    numOnes = 6;
    numZeros = 6;
    numNegOnes = 6;
    k = 13;
    console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));
};

main();

module.exports = kItemsWithMaximumSum;
