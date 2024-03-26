import express from "express";
import bodyParser from "body-parser";
import passport from "passport";

import connect from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import { passportAuth } from "./config/jwt-middleware.js";

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  passportAuth(passport);

  app.use("/api", apiRouter);

  app.listen(PORT, async () => {
    console.log("Server started on PORT", PORT);
    await connect();
  });
};

setupAndStartServer();
