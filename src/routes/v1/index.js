import { Router } from "express";

import {
  TweetController,
  LikeController,
  CommentController,
} from "../../controllers/index.js";

const router = Router();

router.post("/tweets", TweetController.createTweet);
router.get("/tweets/:id", TweetController.get);

router.post("/likes/toggle", LikeController.toggleLike);

router.post("/comments", CommentController.createComment);

export default router;
