import users from "../dataBase/database";

const deleteUserService = (id, idLoggedUser) => {
  const loggedUser = users.find((user) => user.uuid === idLoggedUser);
  const userIndex = users.findIndex((elem) => elem.uuid === id);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  if (!loggedUser.isAdm && idLoggedUser !== id) {
    throw new Error(
      "Unauthorized. You must have administrator permissions to delete other users."
    );
  }

  users.splice(userIndex, 1);
};

export default deleteUserService;
