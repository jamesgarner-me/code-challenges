import org.junit.jupiter.api.Test;
import org.example.Twitter;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

public class TwitterTest {

    @Test
    void twitterScenario1() {
        Twitter t;
        List<Integer> nf;

        t = new Twitter();

        t.postTweet(1,5);

        // assert newsfeed
        nf = t.getNewsFeed(1);
        assertTrue(nf.contains(5), "Newsfeed contains tweet id 5");

        t.follow(1,2);

        t.postTweet(2,6); // 10 posts 1111

        // assert newsfeed
        nf = t.getNewsFeed(1);
        assertTrue(nf.contains(5), "Newsfeed contains tweet id 5");
        assertTrue(nf.contains(6), "Newsfeed contains tweet id 6");

        t.unfollow(1,2);

        // assert newsfeed
        nf = t.getNewsFeed(1);
        assertTrue(nf.contains(5), "Newsfeed contains tweet id 5");
        assertFalse(nf.contains(6), "Newsfeed no longer contains tweet id 6");
    }
}