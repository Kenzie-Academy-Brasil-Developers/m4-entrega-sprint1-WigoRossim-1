import profileUserService from "../services/profileUser.service";

const profileUserController = (req, res) => {
  const uuid = req.user.uuid;
  const user = profileUserService(uuid);

  return res.status(200).json(user);
};

export default profileUserController;
