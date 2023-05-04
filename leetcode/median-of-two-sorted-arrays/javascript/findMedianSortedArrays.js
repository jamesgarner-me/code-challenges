/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0,
        l = 0,
        r = 0,
        isEven = false,
        targetLength = 0,
        totalLength = nums1.length + nums2.length;

    totalLength % 2 === 0 ? (isEven = true) : (isEven = false);

    isEven // used to stop when we're half way
        ? (targetLength = Math.ceil(totalLength / 2) + 1)
        : (targetLength = Math.ceil(totalLength / 2));

    // copy smaller value from left and right arrays into auxillary array.
    // only go to half way; median
    let array = Array(targetLength);
    while (l < nums1.length && r < nums2.length && i < targetLength) {
        if (nums1[l] <= nums2[r]) {
            array[i] = nums1[l];
            l++;
            i++;
        } else {
            array[i] = nums2[r];
            r++;
            i++;
        }
    }
    // comparison finished;
    // copy any remaining elements from left array, then right array
    while (l < nums1.length && i < targetLength) {
        array[i] = nums1[l];
        l++;
        i++;
    }
    while (r < nums2.length && i < targetLength) {
        array[i] = nums2[r];
        r++;
        i++;
    }
    // return median; if was even then take average of last two elements
    if (isEven) {
        let len = array.length - 1;
        return (array[len] + array[len - 1]) / 2;
    } else {
        let len = array.length - 1;
        return array[len];
    }
};

var main = function () {
    console.log(`Example 1: ${findMedianSortedArrays([1, 3], [2])}`);
    console.log(`Example 2: ${findMedianSortedArrays([1, 2], [3, 4])}`);
};
main();

module.exports = findMedianSortedArrays;
