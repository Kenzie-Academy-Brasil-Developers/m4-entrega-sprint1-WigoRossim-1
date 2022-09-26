import users from "../dataBase/database";

const profileUserService = (id) => {
  const user = users.find((elem) => elem.id === id);

  return user;
};

export default profileUserService;
