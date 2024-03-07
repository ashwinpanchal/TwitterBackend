import mongoose from "mongoose";

import { MONGODB_URL } from "./serverConfig.js";

const connect = async () => {
  await mongoose.connect(MONGODB_URL, {
    dbName: "twitter_dev",
  });
  console.log("MongoDb Connected");
};

export default connect;
