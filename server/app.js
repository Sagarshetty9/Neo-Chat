import express from "express";
import authRouter from "./src/router/auth.routes.js";
import userRouter from "./src/router/user.routes.js";
import messageRouter from "./src/router/message.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import config from "./src/config/config.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [config.FRONTEND_URL],  //Frontend links
    credentials:true
  }),
);


app.get("/", (req, res) => {
  res.send(`Server is up and running!!`);
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use('/api', messageRouter);

export default app;
