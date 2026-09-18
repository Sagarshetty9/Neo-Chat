import mongoose, { mongo } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Sender is required"],
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Receiver is required "],
    },
    status: {
        type: String,
        enum: ["sent", "delivered", "read"],  
        default: "sent"
      }
  },
  { timestamps: true },
);


const MessageModel = mongoose.Model("Messages", messageSchema);


export default MessageModel;