import { Router } from "express";

import {
  TweetController,
  LikeController,
  CommentController,
  UserController,
} from "../../controllers/index.js";

const router = Router();

router.post("/tweets", TweetController.createTweet);
router.get("/tweets/:id", TweetController.get);

router.post("/likes/toggle", LikeController.toggleLike);

router.post("/comments", CommentController.createComment);

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

export default router;
