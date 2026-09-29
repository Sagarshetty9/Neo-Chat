import app from "./app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/database.js";

import { socketAuth } from "./src/middleware/socket.middleware.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { initSocket } from "./src/config/socket.config.js";

await connectDB();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: config.FRONTEND_URL,  // ← must be EXACTLY the Vite origin
    credentials: true,                // ← this is what's missing/empty
    methods: ['GET', 'POST'],
  },
});

//socket middleware
io.use(socketAuth);
initSocket(io);

// At the end of server.js //Temporary
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server error'
  });
});

server.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
   console.log(`Socket.io listening...`);
});
