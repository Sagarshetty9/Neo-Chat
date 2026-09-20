import express from "express";
import { validateSearch } from "../miiddleware/validateSearchQuery.js";

import { searchUser, getUserDetails } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/search", validateSearch ,searchUser);
userRouter.get("/getUserDetails" ,getUserDetails);

export default userRouter;
