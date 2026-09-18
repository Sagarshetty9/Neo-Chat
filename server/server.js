import app from "./app.js"
import config from "./src/config/config.js"
import connectDB from "./src/config/database.js"


await connectDB()

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost${config.PORT}`)
})