import express from "express";
import authRouter from "./src/router/auth.routes.js";

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Server is up and running!!`)
})


app.use('/api/auth', authRouter)




export default app