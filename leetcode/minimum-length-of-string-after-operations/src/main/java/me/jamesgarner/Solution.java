package me.jamesgarner;

import java.util.HashMap;
import java.util.Map;

public class Solution {
    private int countDivisibleByThreeAfterSubtractingTwo(int start) {
        int number = start;
        int count = 0;
        while (number > 1) {
            if ((number / 3) >= 1) {
                count += 1;
            }
            number -= 2;
        }
        return count;
    }

    // Approach: each grouping of matching characters can be reduced from 3 instances to 2
    // - track letter count in HashMap
    // - for each letter, divide by three and while there's a remainder of > 1 remove 2 chars
    // - e.g. "a..a..a..a..a..a..a" (7/3 = 2, remove 2 chars) -> "a..a..a..a..a": (5/3 = 1, remove 2 chars) ->  "a..a..a" (3/3 = 1, remove 2 chars)
    public int minimumLength(String s) {
        Map<Character, Integer> charCounts = new HashMap<>();
        int sum = 0;

        for (int i = 0; i < s.length(); i++) {
            charCounts.merge(s.charAt(i), 1, Integer::sum);
        }
        for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
            Integer value = entry.getValue();
            sum += countDivisibleByThreeAfterSubtractingTwo(value);
        }
        int result = sum > 0 ? s.length() - (sum * 2) : s.length();
        return result;
    }
}
