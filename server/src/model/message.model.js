import mongoose from "mongoose";

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

messageSchema.index({ sender: 1, receiver: 1 });
messageSchema.index({ status: 1 });



const MessageModel = mongoose.model("Messages", messageSchema);


export default MessageModel;