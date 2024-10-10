package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void kthCharacterInGameScenario1() {
        Solution s = new Solution();
        char actual = s.kthCharacter(5);
        Assertions.assertEquals('b', actual);
    }
    @Test
    void kthCharacterInGameScenario2() {
        Solution s = new Solution();
        char actual = s.kthCharacter(10);
        Assertions.assertEquals('c', actual);
    }
}
