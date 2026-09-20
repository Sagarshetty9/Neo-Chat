import express from "express";
import authRouter from "./src/router/auth.routes.js";
import userRouter from "./src/router/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`Server is up and running!!`);
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

export default app;
