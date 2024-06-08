package org.example;

import java.util.*;

public class Twitter {

    private final Map<Integer, Integer> tweets;
    private final Map<Integer, List<Integer>> following;

    public Twitter() {
        Map<Integer, Integer> tweets = new LinkedHashMap<>();
        Map<Integer, List<Integer>> following = new HashMap<>();
        this.tweets = tweets;
        this.following = following;
    }

    public void postTweet(int userId, int tweetId) {
        this.tweets.put(tweetId, userId);
    }

    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList() {};
        List<Integer> following = this.following.get(userId);
        int FEED_LIMIT = 10;

        // Iterate through tweets
        for (Map.Entry<Integer, Integer> tweet : this.tweets.entrySet()) {
            Integer tweetId = tweet.getKey();
            Integer tweetUserId = tweet.getValue();
            // return own tweets from user & from user's following
            if (tweetUserId == userId || (following != null && following.contains(tweetUserId))) {
                feed.add(tweetId);
            }
        }
        // most recent to least recent, limit 10
        return feed.size() > FEED_LIMIT ?
                feed.subList(feed.size() - FEED_LIMIT, feed.size()).reversed() :
                feed.reversed();
    }

    public void follow(int followerId, int followeeId) {
        List<Integer> following = new ArrayList<>();
        if (this.following.get(followerId) != null) {
            following = this.following.get(followerId);
            following.add(followeeId);
        } else {
            following.add(followeeId);
        }
        this.following.put(followerId, following);
    }

    public void unfollow(int followerId, int followeeId) {
        List<Integer> following;
        if (this.following.get(followerId) != null) {
            following = this.following.get(followerId);
            following.remove(Integer.valueOf(followeeId));
            this.following.put(followerId, following);
        }
    }
}

