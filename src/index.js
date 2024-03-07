import express from "express";
import bodyParser from "body-parser";

import connect from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRouter);

  app.listen(PORT, async () => {
    console.log("Server started on PORT", PORT);
    await connect();
  });
};

setupAndStartServer();
