import users from "../dataBase/database";

const verifyEmailAvailability = (req, res, next) => {
  const { email } = req.body;
  const userAlreadyExists = users.find((elem) => elem.email === email);

  if (userAlreadyExists) {
    return res
      .status(400)
      .json({ messege: "This email adress is already being used" });
  }
  next();
};

export default verifyEmailAvailability;
