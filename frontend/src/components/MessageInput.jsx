import { useState, useContext } from "react";
import { SocketContext } from "../context/socketContext.jsx";

const MessageInput = ({ targetUserId }) => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim() || !targetUserId) return;

    socket.emit("send-message", {
      message: message.trim(),
      targetUserId,
    });

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSend}
      className="p-4 md:p-6 bg-neo-paper"
    >
      <div className="relative border-2 border-neo-ink bg-neo-canvas shadow-[4px_4px_0_var(--color-neo-ink)]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write to..."
          disabled={!targetUserId}
          className="p-3 w-full h-16 md:h-19px-4 pr-16 pb-5 bg-transparent text-neo-ink placeholder-neo-quiet focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <span className="absolute left-4 bottom-2 text-[9px] tracking-wider text-neo-quiet">
          Enter to send · Shift + Enter for a new line
        </span>

        <button
          type="submit"
          disabled={!targetUserId || !message.trim()}
          className="absolute right-3 top-3 w-9 h-9 border border-neo-border bg-neo-coral text-neo-ink flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Send message"
        >
          <span className="text-sm">➤</span>
        </button>


      </div>
    </form>
  );
};

export default MessageInput;