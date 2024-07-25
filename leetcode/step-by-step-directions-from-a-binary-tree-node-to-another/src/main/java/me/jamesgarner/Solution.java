package me.jamesgarner;

import java.util.*;

class Solution {
    private TreeNode startNode;
    private HashMap<Integer, TreeNode> parents = new HashMap<>();

    public class Pair<K, V> {
        private K key;
        private V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() { return key; }
        public V getValue() { return value; }
    }

    // This helper not relevant to solve challenge - created it to practise Breadth First Search
    public void printTreeUsingBFS(TreeNode node) {
        ArrayList<TreeNode> stack = new ArrayList<>();
        stack.add(node);
        while (!stack.isEmpty()) {
            for (int i = 0; i < stack.size(); i++) {
                TreeNode n = stack.removeFirst();
                System.out.println(n.val);
                if (n.left != null) {
                    stack.add(n.left);
                }
                if (n.right != null) {
                    stack.add(n.right);
                }
            }
        }
    }
    // This helper not relevant to solve challenge - created it to practise Depth First Search
    public void printTreeUsingDFS(TreeNode node) {
        // base case
        if (node == null) {
            return;
        }
        System.out.println(node.val);
        printTreeUsingDFS(node.left);
        printTreeUsingDFS(node.right);
    }

    public void initialiseParentsAndFindStartNode(TreeNode node, TreeNode parent, int startValue) {
        if (node == null) {
            return;
        }
        if (node.val == startValue) {
            startNode = node;
        }
        parents.put(node.val, parent);
        initialiseParentsAndFindStartNode(node.left, node, startValue);
        initialiseParentsAndFindStartNode(node.right, node, startValue);
    }

    public String getDirections(TreeNode root, int startValue, int destValue) {

        ArrayList<TreeNode> queue = new ArrayList<>();
        Map<TreeNode, Pair<TreeNode, String>> tempPath = new HashMap<>();
        ArrayList<String> resultPath = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();

        initialiseParentsAndFindStartNode(root, null, startValue);

        Boolean isFound = false;
        TreeNode targetNode = null;

        queue.add(startNode);

        while (!queue.isEmpty() && !isFound) {
            // Perform BFS (also travelling up) to find target Node
            for (int i = 0; i < queue.size(); i++) {
                TreeNode n = queue.removeFirst();
                visited.add(n.val);
                if (n.val == destValue) {
                    targetNode = n;
                    isFound = true;
                    break;
                }
                // Record path travelled in tempPath
                TreeNode parent = parents.get(n.val);
                if (parent != null && visited.add(parent.val)) {
                    queue.add(parent);
                    tempPath.put(parent, new Pair<>(n, "U"));
                }
                if (n.left != null && visited.add(n.left.val)) {
                    queue.add(n.left);
                    tempPath.put(n.left, new Pair<>(n, "L"));
                }
                if (n.right != null && visited.add(n.right.val)) {
                    queue.add(n.right);
                    tempPath.put(n.right, new Pair<>(n, "R"));
                }
            }
        }

        // Construct path from destValue to startValue then reverse to get correct order
        TreeNode n = targetNode;
        while (n != startNode) {
            Pair<TreeNode, String> sourceAndDirection = tempPath.get(n);
            resultPath.add(sourceAndDirection.getValue());
            n = sourceAndDirection.getKey();
        }
        Collections.reverse(resultPath);

        return String.join("", resultPath);
    }
}

