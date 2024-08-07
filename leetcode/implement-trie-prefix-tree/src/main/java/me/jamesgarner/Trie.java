package me.jamesgarner;

import java.util.HashMap;

class Trie {

    private class TrieNode {
        private HashMap<Character, TrieNode> children = new HashMap<>();
        private Boolean isEndOfWord = false;
    }

    private TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode current = new TrieNode();
        current = this.root;
        for(char c : word.toCharArray()) {
            if(!current.children.containsKey(c)) {
                current.children.put(c, new TrieNode());
            }
            current = current.children.get(c);
        }
        current.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode current = this.root;
        for(char c : word.toCharArray()) {
            if(!current.children.containsKey(c)) {
                return false;
            }
            current = current.children.get(c);
        }
        return current.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode current = this.root;
        for(char c: prefix.toCharArray()) {
            if(!current.children.containsKey(c)) {
                return false;
            }
            current = current.children.get(c);
        }
        return true;
    }
}