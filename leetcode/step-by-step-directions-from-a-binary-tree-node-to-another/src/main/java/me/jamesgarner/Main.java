package me.jamesgarner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Setup
        // [5,1,2,3,null,6,4] - https://assets.leetcode.com/uploads/2021/11/15/eg1.png
        TreeNode node1 = new TreeNode(1, new TreeNode(3), null);
        TreeNode node2 = new TreeNode(2, new TreeNode(6), new TreeNode(4));
        TreeNode root = new TreeNode(5, node1, node2);

        Solution s = new Solution();
        s.getDirections(root, 3, 6);
//        s.printTreeUsingDFS(root);
//        s.printTreeUsingBFS(root);
    }
}