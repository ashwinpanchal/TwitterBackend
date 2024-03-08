import { TweetService } from "../services/index.js";

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const response = await tweetService.createTweet(req.body);
    return res.status(201).json({
      success: true,
      message: "Sucessfully created a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await tweetService.getTweet(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Sucessfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};

const TweetController = {
  createTweet,
  get,
};

export default TweetController;
