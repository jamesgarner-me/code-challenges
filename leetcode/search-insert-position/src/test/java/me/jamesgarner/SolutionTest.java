package me.jamesgarner;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class SolutionTest {

    @Test
    public void testSearchInsert() {
        Solution solution = new Solution();

        // Example 1: Target exists in array
        int[] nums1 = {1, 3, 5, 6};
        int target1 = 5;
        Assertions.assertEquals(2, solution.searchInsert(nums1, target1),
                "Should find 5 at index 2");

        // Example 2: Target doesn't exist but should be inserted in the middle
        int[] nums2 = {1, 3, 5, 6};
        int target2 = 2;
        Assertions.assertEquals(1, solution.searchInsert(nums2, target2),
                "Should insert 2 at index 1");

        // Example 3: Target doesn't exist and should be inserted at the end
        int[] nums3 = {1, 3, 5, 6};
        int target3 = 7;
        Assertions.assertEquals(4, solution.searchInsert(nums3, target3),
                "Should insert 7 at index 4");

        // Additional test: Target doesn't exist and should be inserted at the beginning
        int[] nums4 = {1, 3, 5, 6};
        int target4 = 0;
        Assertions.assertEquals(0, solution.searchInsert(nums4, target4),
                "Should insert 0 at index 0");

        // Additional test: Empty array
        int[] nums5 = {};
        int target5 = 5;
        Assertions.assertEquals(0, solution.searchInsert(nums5, target5),
                "Should insert 5 at index 0 in an empty array");

        // Additional test: Single element array (target smaller)
        int[] nums6 = {3};
        int target6 = 1;
        Assertions.assertEquals(0, solution.searchInsert(nums6, target6),
                "Should insert 1 at index 0");

        // Additional test: Single element array (target larger)
        int[] nums7 = {3};
        int target7 = 5;
        Assertions.assertEquals(1, solution.searchInsert(nums7, target7),
                "Should insert 5 at index 1");

        // Additional test: Single element array (target equal)
        int[] nums8 = {3};
        int target8 = 3;
        Assertions.assertEquals(0, solution.searchInsert(nums8, target8),
                "Should find 3 at index 0");
    }
}