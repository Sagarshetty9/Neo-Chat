import MessageModel from "../model/message.model.js";

export const getMessages = async (req, res) => {
  const { targetUserId } = req.query;
  const userId = req.decodedToken.id;

  const messages = await MessageModel.find({
    $or: [
      { sender: userId, receiver: targetUserId },
      { sender: targetUserId, receiver: userId },
    ],
  }).sort({ timestamp: 1 });

  return res.status(200).json({ success: true, messages });
};

export const markMessagesAsRead = async (req, res) => {
  const { targetUserId } = req.body;
  const userId = req.decodedToken.id;

  await MessageModel.updateMany(
    { sender: targetUserId, receiver: userId, status: "sent" },
    { status: "read" },
  );

  return res.status(200).json({ success: true });
};
