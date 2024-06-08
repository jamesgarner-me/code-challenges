package org.example;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[] userIds = new int[]{10, 20, 30, 40};
        int[] tweetIds = new int[]{1111, 2222, 3333, 4444};

        Twitter obj = new Twitter();

        obj.postTweet(userIds[0],tweetIds[0]); // 10 posts 1111

        List<Integer> param_1 = obj.getNewsFeed(userIds[0]);

        obj.follow(userIds[0],userIds[1]); // 10 follows 20

        obj.postTweet(userIds[1],tweetIds[1]); // 20 posts 2222

        List<Integer> param_2 = obj.getNewsFeed(userIds[0]); // 10's news feed to include 1111, 2222

        obj.unfollow(userIds[0],userIds[1]); // 10 unfollows 20

        List<Integer> param_3 = obj.getNewsFeed(userIds[0]); // 10's news feed only includes 1111

    }
}

