import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async createComment(modelId, modelType, userId, content) {
    try {
      if (modelType === "Tweet") {
        var commentable = await this.tweetRepository.getById(modelId);
      } else if (modelType === "Comment") {
        var commentable = await this.commentRepository.getById(modelId);
      } else {
        throw new Error("Unknown modelType");
      }
      const comment = await this.commentRepository.create({
        content: content,
        userId: userId,
        onModel: modelType,
        commentable: modelId,
        comments: [],
        likes: [],
      });
      commentable.comments.push(comment);
      await commentable.save();
      return comment;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }
}

export default CommentService;
