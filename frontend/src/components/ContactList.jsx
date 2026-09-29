import ContactCard from "./ui/ContactCard.jsx";
import { SocketContext } from "../context/socketContext.jsx";
import { useContext, useState } from "react";

function ContactList({ contacts, onSelectContact }) {
  const { socket } = useContext(SocketContext);

  const joinRoom = (targetId) => {
    onSelectContact(targetId); // Send to parent
    socket.emit("join-chat", targetId);
  };

  return (
    <>
      <div>
        {contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact._id}
            onSelect={joinRoom}
          />
        ))}
      </div>
    </>
  );
}

export default ContactList;
