import { Tweet } from "../models/index.js";

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

  async getByIdWithLikes(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getByIdWithComments(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId).populate({
        path: "comments",
      });
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getByIdDeepPopulated(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId).populate({
        path: "comments",
        populate: { path: "comments" }, // only populate to two stages
      });
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

export default TweetRepository;
