import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async createTweet(data) {
    try {
      const content = data.content;
      const hashtags = content
        .match(/#(\w+)/g)
        .map((tag) => tag.slice(1).toLowerCase());
      const tweet = await this.tweetRepository.createTweet(data);
      let alreadyPresentTags = await this.hashtagRepository.getByName(hashtags);
      const titleAlreadyPresentTags = alreadyPresentTags.map(
        (tag) => tag.title
      );
      let newTags = hashtags.filter(
        (v) => !titleAlreadyPresentTags.includes(v)
      );
      newTags = newTags.map((value) => {
        return {
          title: value,
          tweets: [tweet.id],
        };
      });
      const createdTags = await this.hashtagRepository.bulkCreate(newTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });
      // let tagIds = [...alreadyPresentTags, ...createdTags].map((tag) => tag.id);
      // tweet.hashtags = [...tweet.hashtags, ...tagIds];
      // await tweet.save();
      return tweet;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }
}

export default TweetService;
