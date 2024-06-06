package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void longestPalindromeScenario1() {
        Solution s = new Solution();
        int result = s.longestPalindrome("abccccdd");
        assertEquals(result, 7);
    }

    @Test
    void longestPalindromeScenario2() {
        Solution s = new Solution();
        int result = s.longestPalindrome("a");
        assertEquals(result, 1);
    }

    @Test
    void longestPalindromeScenario3() {
        Solution s = new Solution();
        int result = s.longestPalindrome("ccc");
        assertEquals(result, 3);
    }

    @Test
    void longestPalindromeScenario4() {
        Solution s = new Solution();
        int result = s.longestPalindrome("zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez");
        assertEquals(result, 55);
    }
}