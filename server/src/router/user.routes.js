import express from "express";
import { validateSearch } from "../middleware/validateSearchQuery.js";
import checkAuthentication from "../middleware/auth.middleware.js";

import { searchUser, getUserDetails, addContact } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/search", checkAuthentication, validateSearch, searchUser);
userRouter.get("/getUserDetails", checkAuthentication, getUserDetails);

userRouter.post("/add-contact", checkAuthentication, addContact)

export default userRouter;
