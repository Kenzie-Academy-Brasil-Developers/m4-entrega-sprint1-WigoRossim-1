import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { uuid } = req.params;
  const idLoggedUser = req.user.uuid;
  const updatedDate = req.body;

  const updateUser = updateUserService(updatedDate, uuid, idLoggedUser);
  return res.json(updateUser);
};

export default updateUserController;
