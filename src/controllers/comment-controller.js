import { CommentService } from "../services/index.js";

const commentService = new CommentService();

const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(201).json({
      success: true,
      message: "Sucessfully created a comment",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};

const CommentController = {
  createComment,
};

export default CommentController;
