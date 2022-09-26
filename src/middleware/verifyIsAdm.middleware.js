import users from "../dataBase/database";

const verifyIsAdmMiddleware = (req, res, next) => {
  const uuid = req.user.uuid;
  const userAuth = users.find((user) => user.uuid === uuid);
  if (userAuth.isAdm === false) {
    return res.status(403).json({ messege: "access denied!!" });
  }
  next();
};

export default verifyIsAdmMiddleware;
