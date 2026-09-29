import { useState, useContext, useEffect } from "react";
import MessageInput from "./MessageInput.jsx";
import MessageDisplay from "./MessageDisplay.jsx";
import { SocketContext } from "../context/socketContext.jsx";
import { messagesApi } from "../api/messageApi.js";

function ChatBox({ targetUserId }) {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!targetUserId) return;

    messagesApi.getMessages(targetUserId)
      .then(res => setMessages(res.data.messages))
      .catch(err => console.log(err));

    messagesApi.markMessagesAsRead(targetUserId)
      .catch(err => console.log(err));

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MessageDisplay messages={messages} />
      <MessageInput targetUserId={targetUserId} />
    </div>
  );
}

export default ChatBox;