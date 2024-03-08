import { Router } from "express";

import { TweetController, LikeController } from "../../controllers/index.js";

const router = Router();

router.post("/tweets", TweetController.createTweet);

router.post("/likes/toggle", LikeController.toggleLike);

export default router;
