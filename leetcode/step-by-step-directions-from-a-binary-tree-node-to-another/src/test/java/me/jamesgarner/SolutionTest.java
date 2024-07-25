package me.jamesgarner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void getDirectionsTestScenario1() {
        // Setup
        // [5,1,2,3,null,6,4] - https://assets.leetcode.com/uploads/2021/11/15/eg1.png
        TreeNode node1 = new TreeNode(1, new TreeNode(3), null);
        TreeNode node2 = new TreeNode(2, new TreeNode(6), new TreeNode(4));
        TreeNode root = new TreeNode(5, node1, node2);

        Solution s = new Solution();
        String result = s.getDirections(root, 3, 6);
        Assertions.assertEquals("UURL", result);
    }

    @Test
    void getDirectionsTestScenario2() {
        // Setup
        // [5,1,2,3,null,6,4] - https://assets.leetcode.com/uploads/2021/11/15/eg1.png
        TreeNode node1 = new TreeNode(1, null, null);
        TreeNode root = new TreeNode(2, node1, null);

        Solution s = new Solution();
        String result = s.getDirections(root, 2, 1);
        Assertions.assertEquals("L", result);
    }

}