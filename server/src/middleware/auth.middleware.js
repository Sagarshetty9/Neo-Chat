import config from "../config/config.js";
import jwt from "jsonwebtoken";

function checkAuthentication(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to access this page!",
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);

    req.decodedToken = decoded;

    next();
  } catch (error) {
    next(error);
  }
}

export default checkAuthentication;