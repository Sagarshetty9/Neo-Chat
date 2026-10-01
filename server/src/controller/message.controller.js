import MessageModel from "../model/message.model.js";

export const getMessages = async (req, res, next) => {
  try {
    const { targetUserId } = req.query;
    const userId = req.decodedToken.id;

    const messages = await MessageModel.find({
      $or: [
        { sender: userId, receiver: targetUserId },
        { sender: targetUserId, receiver: userId },
      ],
    }).sort({ timestamp: 1 });

    return res.status(200).json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

export const markMessagesAsRead = async (req, res, next) => {
  try {
    const { targetUserId } = req.body;
    const userId = req.decodedToken.id;

    await MessageModel.updateMany(
      { sender: targetUserId, receiver: userId, status: "sent" },
      { status: "read" },
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};