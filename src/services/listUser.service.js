import users from "../dataBase/database.js";
const listUserService = () => {
  const listUser = users;
  return listUser;
};

export default listUserService;
