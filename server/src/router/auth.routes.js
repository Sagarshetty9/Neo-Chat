import express from "express";
import { login, logout, register } from "../controller/auth.controller.js"; 
import checkAuthentication from "../middleware/auth.middleware.js"

import {
  validateSchema,
  userLoginSchema,
  userRegisterSchema,
} from "../middleware/sanitizeRequest.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", validateSchema(userLoginSchema), login);
authRouter.post("/register", validateSchema(userRegisterSchema), register);
authRouter.post("/logout", checkAuthentication, logout )

export default authRouter;
