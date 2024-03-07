import express from "express";

import connect from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, async () => {
    console.log("Server started on PORT", PORT);
    await connect();
  });
};

setupAndStartServer();
