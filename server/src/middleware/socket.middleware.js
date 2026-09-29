import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const socketAuth = (socket, next) => {
  try {
    const token = socket.handshake.headers.cookie?.match(/token=([^;]+)/)?.[1]; //<== separate token= from cookie

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
