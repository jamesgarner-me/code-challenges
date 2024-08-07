package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void solutionScenario1() {
        Trie t = new Trie();
        t.insert("apple");
        Assertions.assertTrue(t.search("apple"));
        Assertions.assertFalse(t.search("app"));
        Assertions.assertTrue(t.startsWith("app"));
        t.insert("app");
        Assertions.assertTrue(t.search("app"));
    }
}
