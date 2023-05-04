const findMedianSortedArrays = require('./findMedianSortedArrays');

describe('Tests', () => {
    test('Example 1', () => {
        let nums1 = [1, 3],
            nums2 = [2];
        let expected = 2.0;
        let result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(expected);
    });
    test('Example 2', () => {
        let nums1 = [1, 2],
            nums2 = [3, 4];
        let expected = 2.5;
        let result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(expected);
    });
});
