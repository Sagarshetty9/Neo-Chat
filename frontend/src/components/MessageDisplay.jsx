import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";
import MessageBubble from "./MessageBubble.jsx";

const MessageDisplay = ({ messages }) => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
      {messages.map((msg) => (
        <MessageBubble
          key={msg._id}
          message={msg}
          isOwn={msg.sender === user._id}
        />
      ))}
    </div>
  );
};

export default MessageDisplay;
