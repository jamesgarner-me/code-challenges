package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void canAliceWinScenario1() {
        Solution s = new Solution();
        String input = "abaacbcbb";
        int result = s.minimumLength(input);
        Assertions.assertEquals(5, result);
    }
    @Test
    void canAliceWinScenario2() {
        Solution s = new Solution();
        String input = "aa";
        int result = s.minimumLength(input);
        Assertions.assertEquals(2, result);
    }
    @Test
    void canAliceWinScenario3() {
        Solution s = new Solution();
        String input = "lyqkwhyy";
        int result = s.minimumLength(input);
        Assertions.assertEquals(6, result);
    }
    @Test
    void canAliceWinScenario4() {
        Solution s = new Solution();
        String input = "ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj";
        int result = s.minimumLength(input);
        Assertions.assertEquals(38, result);
    }
}
