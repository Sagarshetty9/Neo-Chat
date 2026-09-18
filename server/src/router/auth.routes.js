import express from "express";
import { login, register } from "../controller/auth.controller.js";

import {
  validateSchema,
  userLoginSchema,
  userRegisterSchema,
} from "../miiddleware/sanitizeRequest.middleware.js";

const authRouter = express.Router();
//Need to change get => post
authRouter.post("/login", validateSchema(userLoginSchema), login);
authRouter.post("/register", validateSchema(userRegisterSchema), register);

export default authRouter;
