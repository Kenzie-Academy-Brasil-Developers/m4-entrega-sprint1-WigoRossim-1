import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const token = userLoginService(email, password);
  return res.status(200).json({ token });
};

export default userLoginController;
