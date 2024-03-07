const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return `${this.content}\nCreated by: ${this.userEmail}`;
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
