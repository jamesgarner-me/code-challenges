struct BrowserHistory {
    history: Vec<String>,
    cursor: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl BrowserHistory {
    fn new(homepage: String) -> Self {
        let history = vec![homepage];
        let cursor = history.len() as i32;
        let browser_history = BrowserHistory { history, cursor };
        return browser_history;
    }

    fn visit(&mut self, url: String) {
        self.history.truncate((self.cursor + 1) as usize);
        self.history.push(url);
        self.cursor = self.history.len() as i32 - 1;
    }

    fn back(&mut self, steps: i32) -> String {
        let new_cursor = self.cursor - steps;
        if new_cursor > 0 {
            self.cursor = new_cursor
        } else {
            self.cursor = 0;
        }
        return (*self.history[self.cursor as usize]).to_string();
    }

    fn forward(&mut self, steps: i32) -> String {
        let new_cursor = self.cursor + steps;
        if new_cursor < self.history.len() as i32 - 1 {
            self.cursor = new_cursor;
        } else {
            self.cursor = self.history.len() as i32 - 1;
        }
        return (*self.history[self.cursor as usize]).to_string();
    }
}

fn main() {}
// /**
//  * Your BrowserHistory object will be instantiated and called as such:
//  * let obj = BrowserHistory::new(homepage);
//  * obj.visit(url);
//  * let ret_2: String = obj.back(steps);
//  * let ret_3: String = obj.forward(steps);
//  */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example1() {
        let mut browser_history = BrowserHistory::new("leetcode.com".to_string());
        assert_eq!(browser_history.history, vec!["leetcode.com".to_string()]);

        browser_history.visit("google.com".to_string());
        browser_history.visit("facebook.com".to_string());
        browser_history.visit("youtube.com".to_string());
        assert_eq!(
            browser_history.history,
            vec![
                "leetcode.com".to_string(),
                "google.com".to_string(),
                "facebook.com".to_string(),
                "youtube.com".to_string()
            ]
        );

        assert_eq!(browser_history.back(1), "facebook.com".to_string());

        assert_eq!(browser_history.back(1), "google.com".to_string());

        assert_eq!(browser_history.forward(1), "facebook.com".to_string());

        browser_history.visit("linkedin.com".to_string());

        assert_eq!(
            browser_history.history,
            vec![
                "leetcode.com".to_string(),
                "google.com".to_string(),
                "facebook.com".to_string(),
                "linkedin.com".to_string()
            ]
        );

        assert_eq!(browser_history.forward(2), "linkedin.com".to_string());

        assert_eq!(browser_history.back(2), "google.com".to_string());

        assert_eq!(browser_history.back(7), "leetcode.com".to_string());
    }
}
