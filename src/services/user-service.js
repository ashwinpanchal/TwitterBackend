import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getUserByEmail(userEmail) {
    try {
      const response = await this.userRepository.findOneBy({ userEmail });
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

export default UserService;
