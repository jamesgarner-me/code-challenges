package org.example;

import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int longestPalindrome(String s) {
        int maxLength = 0;
        boolean isMiddleCharFound = false, hasSingles = false;
        Map<Character, Integer> charMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            charMap.merge(s.charAt(i), 1, Integer::sum);
        }

        // single char case
        if (charMap.size() == 1) {
            return s.length();
        }
        // multi char case
        for (Map.Entry<Character, Integer> e : charMap.entrySet()) {
            Character key = e.getKey();
            if (e.getValue() == 1) {
                hasSingles = true;
            } else if (e.getValue() % 2 == 0) {
                maxLength += e.getValue();
            } else {
                maxLength += e.getValue() - 1;
                hasSingles = true;
            }
        }
        return hasSingles ? maxLength + 1 : maxLength;
    }
}