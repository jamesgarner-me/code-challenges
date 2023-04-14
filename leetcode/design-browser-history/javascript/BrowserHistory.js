/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.history = [];
    this.cursor = 0;
    if (homepage) {
        this.history.push(homepage);
    }
    this.cursor = this.history.length - 1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.history.splice(this.cursor + 1);
    this.history.push(url);
    this.cursor = this.history.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    let newCursor = this.cursor - steps;
    this.cursor = newCursor > 0 ? newCursor : 0;
    return this.history[this.cursor];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    let newCursor = this.cursor + steps;
    let historyLen = this.history.length - 1;
    this.cursor = newCursor <= historyLen ? newCursor : historyLen;
    return this.history[this.cursor];
};

var main = () => {
    // Explanation:
    let browserHistory = new BrowserHistory('leetcode.com');
    console.log(browserHistory.visit('google.com')); // You are in "leetcode.com". Visit "google.com"
    console.log(browserHistory.visit('facebook.com')); // You are in "google.com". Visit "facebook.com"
    console.log(browserHistory.visit('youtube.com')); // You are in "facebook.com". Visit "youtube.com"
    console.log(browserHistory.history);
    console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
    console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
    console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
    console.log(browserHistory.history);
    console.log(browserHistory.visit('linkedin.com')); // You are in "facebook.com". Visit "linkedin.com"
    console.log(browserHistory.history);
    console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
    console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
    console.log(browserHistory.back(7)); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
};
main();

module.exports = { BrowserHistory };
