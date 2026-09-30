import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";
import MessageBubble from "./MessageBubble.jsx";

const MessageDisplay = ({ messages }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-neo-paper space-y-4">
      {messages && messages.length > 0 ? (
        messages.map((msg) => (
          <MessageBubble
            key={msg._id}
            message={msg}
            isOwn={msg.sender === user._id}
          />
        ))
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="text-neo-quiet text-center ">
            There is no perfect opening. Ask a real question, share a small
            observation, or just say hello.
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageDisplay;
