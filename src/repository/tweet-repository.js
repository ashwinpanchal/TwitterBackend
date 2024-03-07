const Tweet = require("../models/tweet");

class TweetRepository {
  async createTweet(data) {
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

  async getByIdWithComments(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId).populate("comments").lean();
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async updateTweet(tweetId, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async destroyTweet(tweetId) {
    try {
      const deletedTweet = await Tweet.findByIdAndDelete(tweetId);
      return deletedTweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find()
        .skip(offset)
        .limit(limit)
        .populate("comments");
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
}

module.exports = TweetRepository;
