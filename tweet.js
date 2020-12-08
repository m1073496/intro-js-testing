class Tweet {
  constructor(handle, text) {
    this.sender = handle;
    this.content = text;
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  };

  like() {
    this.likes = this.likes + 1;
  };

  retweet() {
    this.retweets = this.retweets + 1;
  };

  reply(replyTxt) {
    this.replies.push(replyTxt);
    this.replyCount = this.replyCount + 1;
  };

};

module.exports = Tweet;
