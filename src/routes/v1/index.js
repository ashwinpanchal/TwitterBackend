import { Router } from "express";

import { TweetController } from "../../controllers/index.js";

const router = Router();

router.post("/tweets", TweetController.createTweet);

export default router;
