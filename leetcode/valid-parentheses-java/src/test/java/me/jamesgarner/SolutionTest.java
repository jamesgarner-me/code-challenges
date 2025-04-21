package me.jamesgarner;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {

    @Test
    public void testValidParentheses() {
        Solution solution = new Solution();

        // Test case 1: simple valid parentheses
        assertTrue(solution.isValid("()"),
                "Simple parentheses '()' should be valid");

        // Test case 2: multiple valid brackets
        assertTrue(solution.isValid("()[]{}"),
                "Multiple brackets '()[]{}' should be valid");

        // Test case 3: mismatched brackets
        assertFalse(solution.isValid("(]"),
                "Mismatched brackets '(]' should be invalid");

        // Test case 4: nested brackets
        assertTrue(solution.isValid("([])"),
                "Nested brackets '([])' should be valid");
    }

    @Test
    public void testEdgeCases() {
        Solution solution = new Solution();

        // Empty string
        assertTrue(solution.isValid(""),
                "Empty string should be valid");

        // Unbalanced opening brackets
        assertFalse(solution.isValid("((("),
                "Unbalanced opening brackets '(((' should be invalid");

        // Unbalanced closing brackets
        assertFalse(solution.isValid(")))"),
                "Unbalanced closing brackets ')))' should be invalid");

        // Correctly nested but more complex
        assertTrue(solution.isValid("({[]})"),
                "Complex nested brackets '({[]})' should be valid");
    }
}