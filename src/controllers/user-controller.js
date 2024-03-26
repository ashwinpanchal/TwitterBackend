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

const login = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.userEmail);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
        data: {},
      });
    }
    const token = user.genJWT();
    return res.status(200).json({
      success: true,
      message: "Sucessfully logged in",
      data: { token },
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
  login,
};

export default UserController;
