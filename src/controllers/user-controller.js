import { UserService } from "../services/index.js";

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      userEmail: req.body.userEmail,
      password: req.body.password,
      userName: req.body.userName,
    });
    return res.status(201).json({
      success: true,
      message: "Sucessfully created a user",
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

const UserController = {
  signup,
};

export default UserController;
