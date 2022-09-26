import listUserService from "../services/listUser.service";

const listUserController = (req, res) => {
  const userList = listUserService();

  return res.status(200).json(userList);
};

export default listUserController;
