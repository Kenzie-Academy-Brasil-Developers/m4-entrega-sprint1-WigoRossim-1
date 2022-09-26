import users from "../dataBase/database";

const updateUserService = (updatedDate, id, idLoggedUser) => {
  const loggedUser = users.find((user) => user.uuid === idLoggedUser);
  const userIndex = users.findIndex((elem) => elem.uuid === id);
  if (userIndex === -1) {
    return "User not found";
  }

  if (!loggedUser.isAdm && idLoggedUser !== id) {
    return "Unauthorized. You must have administrator permissions to update other users.";
  }

  updatedDate.createdOn = new Date();

  if (updatedDate.isAdm) {
    delete updatedDate.isAdm;
  }
  users[userIndex] = { ...users[userIndex], ...updatedDate };
  return users[userIndex];
};

export default updateUserService;
