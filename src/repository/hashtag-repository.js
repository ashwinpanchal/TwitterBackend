import { Hashtag } from "../models/index.js";

class HashtagRepository {
  async createHashtag(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async destroyHastag(tagId) {
    try {
      const tag = await Hashtag.findByIdAndDelete(tagId);
      return tag;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async getById(tagId) {
    try {
      const tag = await Hashtag.findById(tagId);
      return tag;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async getByName(titleList) {
    try {
      const tags = await Hashtag.find({ title: titleList });
      return tags;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }
}

export default HashtagRepository;
