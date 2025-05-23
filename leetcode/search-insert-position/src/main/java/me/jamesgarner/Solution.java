package me.jamesgarner;

import java.util.Arrays;

class Solution {
    // Use Binary Search to achieve 0(log n)
    public int searchInsert(int[] nums, int target) {

        int low = 0;
        int high = nums.length - 1;
        int middle;

        while (low <= high) {

            middle = low + (high - low) / 2;

            if (nums[middle] == target) {
                return middle;
            } else if (nums[middle] < target) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return low;
    }
}