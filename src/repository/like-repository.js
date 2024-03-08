import { Like } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }
}

export default LikeRepository;
