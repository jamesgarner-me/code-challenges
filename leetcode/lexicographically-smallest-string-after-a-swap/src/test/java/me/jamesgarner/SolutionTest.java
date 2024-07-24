package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void numbersHaveParityTestOddParity() {
        Solution s = new Solution();
        Boolean result = s.numbersHaveParity(5, 3);
        Assertions.assertEquals(true, result);
    }
    @Test
    void numbersHaveParityTestEvenParity() {
        Solution s = new Solution();
        Boolean result = s.numbersHaveParity(2, 8);
        Assertions.assertEquals(true, result);
    }
    @Test
    void numbersHaveParityTestOddEvenNoParity() {
        Solution s = new Solution();
        Boolean result = s.numbersHaveParity(5, 8);
        Assertions.assertEquals(false, result);
    }

    @Test
    void getSmallestStringScenario2() {
        Solution s = new Solution();
        String result = s.getSmallestString("45320");
        Assertions.assertEquals("43520", result);
    }

    @Test
    void getSmallestStringScenario1() {
        Solution s = new Solution();
        String result = s.getSmallestString("001");
        Assertions.assertEquals("001", result);
    }
}
