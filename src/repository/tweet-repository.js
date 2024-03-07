const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getById(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId);
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
}
