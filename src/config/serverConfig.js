import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const SALT = bcrypt.genSaltSync(9);
const SECRET_KEY = process.env.SECRET_KEY;

export { PORT, MONGODB_URL, SALT, SECRET_KEY };
