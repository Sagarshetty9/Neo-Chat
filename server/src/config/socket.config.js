import MessageModel from "../model/message.model.js";

export function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("join-chat", (targetUserId) => {
      const userId = socket.userId;
      const ids = [userId.toString(), targetUserId.toString()].sort();
      const roomId = `chat_${ids[0]}_${ids[1]}`;
      socket.join(roomId);
      console.log(
        `${socket.userId} joined room with ${targetUserId} at room ${roomId}`,
      );
    });///

    socket.on("send-message", async (data) => {
  
      console.log('Socket ID received from:', socket.id);
      console.log('Raw data:', data);

      
       const { message, targetUserId } = data;

   
      const userId = socket.userId;
      const ids = [userId.toString(), targetUserId.toString()].sort();
      const roomId = `chat_${ids[0]}_${ids[1]}`;
      console.log(targetUserId)

      const savedMessage = await MessageModel.create({
        text: message,  
        sender: userId,
        receiver: targetUserId,
        timestamp: new Date(),
        status: 'sent'  
      });

      io.to(roomId).emit("receive-message", savedMessage);
    });////

    
    

   
  });
}
