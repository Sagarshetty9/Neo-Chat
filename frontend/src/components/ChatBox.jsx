import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import MessageInput from "./MessageInput.jsx";
import MessageDisplay from "./MessageDisplay.jsx";
import { SocketContext } from "../context/socketContext.jsx";
import { messagesApi } from "../api/messageApi.js";

function ChatBox({ targetUserId }) {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!targetUserId) return;

    const fetchMessages = async () => {
      try {
        const res = await messagesApi.getMessages(targetUserId);
        setMessages(res.data.messages);
      } catch (err) {
        toast.error("Failed to load messages");
      }
    };

    const markAsRead = async () => {
      try {
        await messagesApi.markMessagesAsRead(targetUserId);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();
    markAsRead();
    socket.emit('join-chat', { targetUserId });

  }, [targetUserId, socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on('receive-message', (messageData) => {
      setMessages(prev => [...prev, messageData]);
    });

    return () => socket.off('receive-message');
  }, [socket]);

  return (
    <div className="flex-1 flex flex-col bg-neo-canvas border-l-2 border-neo-border">
      {targetUserId ? (
        <>
          <MessageDisplay messages={messages} />
          <MessageInput targetUserId={targetUserId} />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-neo-quiet text-center">Select a contact to start chatting</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;