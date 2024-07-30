package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void canAliceWinScenario1() {
        Solution s = new Solution();
        int[] nums = new int[]{1,2,3,4,10};
        boolean result = s.canAliceWin(nums);
        Assertions.assertFalse(result);
    }

    @Test
    void canAliceWinScenario2() {
        Solution s = new Solution();
        int[] nums = new int[]{1,2,3,4,5,14};
        boolean result = s.canAliceWin(nums);
        Assertions.assertTrue(result);
    }

    @Test
    void canAliceWinScenario3() {
        Solution s = new Solution();
        int[] nums = new int[]{5,5,5,25};
        boolean result = s.canAliceWin(nums);
        Assertions.assertTrue(result);
    }
}
