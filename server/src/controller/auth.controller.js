import bcrypt from "bcrypt";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import { BCRYPT_SALT_ROUNDS } from "../config/constants.js";

import UserModel from "../model/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.validatedData;

  const alreadyRegistered = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (alreadyRegistered) {
    return res.status(409).json({
      success: "false",
      message: "E-mail or Username already in use",
    });
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const newUser = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser._id }, config.JWT_SECRET_KEY, {
    expiresIn: "60m",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });

  return res.status(201).json({
    sucess: true,
    message: "User registered sucessfully!",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.validatedData;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({
        sucess: false,
        message: "Invalid Credentials! Please try again",
      });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res
      .status(401)
      .json({
        sucess: false,
        message: "Invalid Credentials! Please try again",
      });
  }

  const token = jwt.sign({ id: user._id }, config.JWT_SECRET_KEY, {
    expiresIn: "60m",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });
  
  return res.status(200).json({sucess: true, message:"User logged in sucessfully!"})
};
