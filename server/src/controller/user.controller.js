import config from "../config/config.js";
import UserModel from "../model/user.model.js";

import jwt from "jsonwebtoken";

export const searchUser = async (req, res) => {
  const { searchQuery } = req.validatedData;

  const user = await UserModel.find(
    { username: { $regex: searchQuery } },
    { username: 1 },
  );

  if (!user.username) {
    return res.status(404).json({ sucess: false, message: "User not found!" });
  }

  return res
    .status(400)
    .json({ sucess: true, message: "Search sucessfull!", user });
};

export const getUserDetails = async (req, res) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, config.JWT_SECRET_KEY);

  const user = await UserModel.findById(decoded.id);

  if (!user) {
    return res.status(404).json({
      sucess: false,
      message: "You are not authorized to make this query",
    });
  }

  return res.status(200).json({
    sucess: true,
    user,
    message: "User details fetched sucessfully!",
  });
};
