package me.jamesgarner;

import java.util.Arrays;

class Solution {
    public boolean canAliceWin(int[] nums) {
        int singleDigitSum = Arrays.stream(nums).filter(n -> n < 10).sum();
        int doubleDigitSum = Arrays.stream(nums).filter(n -> n >= 10).sum();
        return singleDigitSum != doubleDigitSum;
    }
}