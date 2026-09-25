import jwt from "jsonwebtoken";
import * as cookie from 'cookie';
import config from "../config/config.js";


export const socketAuth = (socket, next) => {
  try {
    const cookies = cookie.parse(socket.handshake.headers.cookie || "");
    const token = cookies.token;

    if (!token) {
      return next(new Error("No token found!"));
    }

    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    socket.userId = decoded.id;
    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
};
