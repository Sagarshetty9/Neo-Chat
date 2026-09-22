import config from "../config/config.js";
import jwt from "jsonwebtoken";

function checkAuthentication(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
  throw new Error("You are not authorized to access this page!")
  }

  const decoded = jwt.verify(token, config.JWT_SECRET_KEY);

  req.decodedToken = decoded;

  next();
}

export default checkAuthentication;
