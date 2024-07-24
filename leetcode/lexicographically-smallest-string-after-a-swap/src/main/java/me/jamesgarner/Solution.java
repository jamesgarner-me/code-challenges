package me.jamesgarner;

class Solution {
    public Boolean numbersHaveParity(int num1, int num2) {
        // Workaround for leetcode (Zero has the same parity as other even numbers in maths)
//        if (num1 == 0 || num2 == 0) {
//            return false;
//        }
        Boolean num1Parity = num1 % 2 == 0;
        Boolean num2Parity = num2 % 2 == 0;
        return (num1Parity && num2Parity) || (!num1Parity && !num2Parity);
    }

    public String getSmallestString(String s) {
        StringBuilder sb = new StringBuilder(s);
        int len = sb.length();
        for (int i = 0; i < len - 1; i++) {
            if (numbersHaveParity(
                    Character.getNumericValue(s.charAt(i)),
                    Character.getNumericValue(s.charAt(i + 1)))) {
                if (s.charAt(i) > s.charAt(i + 1)) {
                    char t = sb.charAt(i);
                    sb.setCharAt(i, sb.charAt(i + 1));
                    sb.setCharAt(i + 1, t);
                    break;
                }
            }
        }
        return sb.toString();
    }
}
