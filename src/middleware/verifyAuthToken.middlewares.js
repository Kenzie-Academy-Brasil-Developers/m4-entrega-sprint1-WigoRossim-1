import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token." });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Invalid Token." });
    }

    req.user = {
      uuid: decoded.sub,
    };
  });

  next();
};

export default verifyAuthTokenMiddleware;
