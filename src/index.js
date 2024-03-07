import express from "express";

import connect from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";

import TweetService from "./services/tweet-service.js";

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, async () => {
    console.log("Server started on PORT", PORT);
    await connect();
    const service = new TweetService();
    await service.createTweet({
      content: "#BAKloL",
    });
  });
};

setupAndStartServer();
