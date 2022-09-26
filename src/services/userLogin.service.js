import users from "../dataBase/database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = (email, password) => {
  const user = users.find((elem) => elem.email === email);

  if (!user) {
    return "Wrong email/password";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return "Wrong email/password";
  }

  const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.uuid,
  });

  return token;
};

export default userLoginService;
