import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const SALT = bcrypt.genSaltSync(9);

export { PORT, MONGODB_URL, SALT };
