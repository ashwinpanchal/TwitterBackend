import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    //* /api/v1/likes/toggle?id=&modelType=
    try {
      if (modelType === "Tweet") {
        var likeable = await this.tweetRepository.getByIdWithLikes(modelId);
      } else if (modelType === "Comment") {
        // TODO (After making the Comment Repository)
      } else {
        throw new Error("Unknown model type"); //! New error
      }
      const exists = await this.likeRepository.findByUserAndLikeable({
        onModel: modelType,
        likeable: modelId,
        userId: userId,
      });
      if (exists) {
        likeable.likes.pull(exists);
        await likeable.save();
        await this.likeRepository.destroy(exists.id);
        var isAdded = false;
      } else {
        const newLike = await this.likeRepository.create({
          onModel: modelType,
          likeable: modelId,
          userId: userId,
        });
        likeable.likes.push(newLike);
        await likeable.save();
        var isAdded = true;
      }
      return isAdded;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

export default LikeService;
