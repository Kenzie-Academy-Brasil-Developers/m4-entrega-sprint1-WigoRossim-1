import users from "../dataBase/database";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    uuid: uuid(),
  };

  users.push(newUser);
  return newUser;
};

export default createUserService;
