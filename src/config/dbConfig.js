const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "twitter_dev",
  });
  console.log("MongoDb Connected");
};

module.exports = connect;
