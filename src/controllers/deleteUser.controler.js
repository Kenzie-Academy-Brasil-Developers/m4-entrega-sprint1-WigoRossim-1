import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    const idLoggedUser = req.user.uuid;

    deleteUserService(uuid, idLoggedUser);

    return res.json({ message: "User deleted with success." });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteUserController;
