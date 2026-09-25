export function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("join-chat", ({ targetUserId }) => {
      const userId = socket.userId;
      const roomId = `chat_${Math.min(userId, targetUserId)}_${Math.max(userId, targetUserId)}`;
      socket.join(roomId);
    });

    //Other events here on forth
  });
}

