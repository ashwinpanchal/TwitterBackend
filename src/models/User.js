import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { SALT } from "../config/serverConfig.js";

const userSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

const User = model("User", userSchema);

export default User;
