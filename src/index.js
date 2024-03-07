const express = require("express");

const connect = require("./config/dbConfig");
const { PORT } = require("./config/serverConfig");

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, async () => {
    console.log("Server started on PORT", PORT);
    await connect();
    const tweetRepo = new TweetRepository();
  });
};

setupAndStartServer();
