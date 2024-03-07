const mongoose = require("mongoose");
const { MONGODB_URL } = require("./serverConfig");

const connect = async () => {
  await mongoose.connect(MONGODB_URL, {
    dbName: "twitter_dev",
  });
  console.log("MongoDb Connected");
};

module.exports = connect;
