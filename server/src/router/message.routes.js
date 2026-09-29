import express from "express";
import {
  getMessages,
  markMessagesAsRead,
} from "../controller/message.controller.js";
import checkAuthentication from "../middleware/auth.middleware.js";

const messageRouter = express.Router();

messageRouter.get("/messages", checkAuthentication, getMessages);
messageRouter.post(
  "/messages/mark-read",
  checkAuthentication,
  markMessagesAsRead,
);

export default messageRouter;
