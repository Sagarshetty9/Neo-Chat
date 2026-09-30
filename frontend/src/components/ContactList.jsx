import ContactCard from "./ui/ContactCard.jsx";
import { SocketContext } from "../context/socketContext.jsx";
import { useContext } from "react";

function ContactList({ contacts, onSelectContact, targetUserId }) {
  const { socket } = useContext(SocketContext);

  const joinRoom = (targetId) => {
    onSelectContact(targetId);
    socket.emit("join-chat", targetId);
  };

  return (
    <div className="flex-1 min-w-0 flex flex-col bg-neo-canvas px-4 py-5 md:px-6 md:py-6 overflow-hidden">
      
      {/* Header */}
      <div className="shrink-0 mb-5">
        <h2 className="text-lg md:text-2xl font-bold text-neo-ink leading-none tracking-tight">
          Your People..
        </h2>

        <p className="mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] text-neo-quiet">
          Conversations {contacts.length}
        </p>
      </div>

      {/* Contact list */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 scrollbar-thin">
        {contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact._id}
            onSelect={joinRoom}
            isSelected={contact._id === targetUserId}
          />
        ))}
      </div>

      {contacts.length === 0 && (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-neo-quiet text-sm text-center">
            No contacts yet
          </p>
        </div>
      )}
    </div>
  );
}

export default ContactList;