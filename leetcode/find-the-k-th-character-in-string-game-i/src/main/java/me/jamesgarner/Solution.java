package me.jamesgarner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Solution {
    public char kthCharacter(int k) {
        StringBuilder word = new StringBuilder("a");
        StringBuilder sb = new StringBuilder();
        while (word.length() <= k) {
            for (int i = 0; i < word.length(); i++) {
                sb.append(getNextLetter(word.charAt(i)));
            }
            word.append(sb.toString());
            sb.setLength(0);
        }
        return word.charAt(k-1);
    }

    public static char getNextLetter(char c) {
        if (!Character.isLetter(c)) {
            return c;
        }
        char base = Character.isUpperCase(c) ? 'A' : 'a';
        return (char) ((c - base + 1) % 26 + base);
    }
}